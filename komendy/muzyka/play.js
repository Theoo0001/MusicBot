const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p', 'graj'],
    utilisation: '{prefix}graj [Nazwa utworu/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Wprowadź prawidłowe wyszukiwanie ${message.author}... ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Nie znaleziono wyników ${message.author}... ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Nie mogę dołączyć do kanału głosowego ${message.author}... ❌`);
        }

        await message.channel.send(`Ładowanie ${res.playlist ? 'playlist' : 'track'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};