const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol', 'glosnosc'],
    utilisation: `{prefix}glosnosc [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Obecna głośność to ${queue.volume} 🔊\n*Aby zmienić głośność, wprowadź prawidłową liczbę między **1** do **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Głośność, którą chcesz zmienić, jest już aktualna ${message.author}... ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Podany numer jest nieprawidłowy. Wpisz liczbę od **1** do **${maxVol}** ${message.author}... ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Głośność została zmieniona do**${vol}**/**${maxVol}**% 🔊` : `Wystąpił problem ${message.author}... ❌`);
    },
};