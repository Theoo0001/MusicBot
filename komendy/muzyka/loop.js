const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'Włącz & wyłącz zapętlanie (loop) utworów',
    voiceChannel: true,
    options: [
        {
        name: 'Wybierz akcje' ,
        description: 'Którą akcję chcesz wykonać w pętli?',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Kolejka', value: 'enable_loop_queue' },
            { name: 'Wyłącz', value: 'disable_loop'},
            { name: 'Utwór', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ ${inter.member} • Nie odtwarzasz utworu!`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`❌ ${inter.member} • Najpierw wyłącz bieżącą muzykę w trybie pętki (/loop)`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `Tryb powtarzania (loop) został **włączony**... Teraz kolejka będzie odtwarzana w nieskończoność 🔁` : `❌ ${inter.member} • Wystapił błąd... Spróbuj ponownie! ❌` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `Tryb powtarzania (loop) został **wyłączony**` : `❌ ${inter.member} • Wystapił błąd... Spróbuj ponownie! ❌` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`❌ ${inter.member} • Najpierw wyłącz bieżącą muzykę w trybie pętki (/loop)`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `Tryb powtarzania (loop) został **włączony**... Teraz utwór będzie odtwarzana w nieskończoność 🔁` : `❌ ${inter.member} • Wystapił błąd... Spróbuj ponownie! ❌` });
                break
            }
        }
       
    },
};