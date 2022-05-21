const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['petla'],
    utilisation: '{prefix}petla <kolejka>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Musisz najpierw wyłączyć bieżącą muzykę w trybie pętli (${client.config.app.px}pętla) ${message.author}... ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Tryb powtarzania **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** cała kolejka będzie się powtarzać w nieskończoność 🔁` : `Coś poszło nie tak ${message.author}... ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Musisz najpierw wyłączyć bieżącą kolejkę w trybie pętli (${client.config.app.px}kolejka pętli) ${message.author}... ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Tryb powtarzania **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** bieżąca muzyka będzie powtarzana w nieskończoność (kolejkę można zapętlić za pomocą opcji <petla>) 🔂` : `Coś poszło nie tak ${message.author}... ❌`);
        };
    },
};