module.exports = {
    name: 'back',
    aliases: ['poprzedni'],
    utilisation: '{prefix}poprzedni',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Wcześniej nie grano muzyki ${message.author}... ❌`);

        await queue.back();

        message.channel.send(`Włączono **poprzedni** utwór ✅`);
    },
};