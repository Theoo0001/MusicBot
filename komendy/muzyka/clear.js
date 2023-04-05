module.exports = {
    name: 'clear',
    description: 'Usuń wszystkie utwory z kolejki',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ ${inter.member} • Aktualnie nie ma odtworzonego utworu!`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `❌ ${inter.member} • W kolejce nie ma żadnego utworu!`, ephemeral: true });

        await queue.clear();

        inter.reply(`Kolejka została właśnie wyczyszczona 🗑️`);
    },
};