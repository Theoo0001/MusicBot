module.exports = {
    name: 'pause',
    aliases: ['zatrzymaj'],
    utilisation: '{prefix}zatrzymaj',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`${message.author} nie odtwarza obecnie muzyki... ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Aktualna muzyka ${queue.current.title} została zatrzymana ✅` : `Wystąpił problem ${message.author}... ❌`);
    },
};