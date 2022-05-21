module.exports = {
    name: 'stop',
    aliases: ['dc', 'zatrzymaj'],
    utilisation: '{prefix}zatrzymaj',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        queue.destroy();

        message.channel.send(`Muzyka zatrzymała się na tym serwerze, do zobaczenia następnym razem ✅`);
    },
};