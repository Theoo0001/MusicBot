module.exports = {
    name: 'clear',
    aliases: ['wyczysc'],
    utilisation: '{prefix}wyczysc',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Brak muzyki w kolejce po aktualnej ${message.author}... ❌`);

        await queue.clear();

        message.channel.send(`Kolejka została właśnie wyczyszczona 🗑️`);
    },
};