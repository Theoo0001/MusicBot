module.exports = {
    name: 'resume',
    aliases: ['rs', 'wznow'],
    utilisation: '{prefix}wznow',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Aktualna muzyka ${queue.current.title} została wznowiona ✅` : `Wystąpił problem ${message.author}... ❌`);
    },
};