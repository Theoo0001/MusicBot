const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'Dostosuj regulacje dźwięku',
    voiceChannel: true,
    options: [
        {
            name: 'Głośność',
            description: 'Wybierz wartość!',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ ${inter.member} • Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `❌ ${inter.member} • Głośność, którą chcesz zmienić, jest już bieżąca!`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `Głośność została zmieniona na **${vol}**/**${maxVol}**% 🔊` : `❌ ${inter.member} • Wystąpił błąd! Spróbuj ponownie?`});
    },
};