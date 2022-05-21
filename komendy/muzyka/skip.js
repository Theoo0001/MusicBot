module.exports = {
    name: 'skip',
    aliases: ['sk', 'pomin'],
    utilisation: '{prefix}pomin',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Aktualna muzyka ${queue.current.title} została pominięta ✅` : `Wystąpił problem ${message.author}... ❌`);
    },
};