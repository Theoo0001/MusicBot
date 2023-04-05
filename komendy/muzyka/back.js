module.exports = {
    name: 'back',
    description: "Wróć do poprzedniego utworu",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ ${inter.member} • Brak odtwarzanego utworu!`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `❌ ${inter.member} • Wcześniej nie odtworzono żadnego utworu!`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`Powrócono do **poprzedniego** utworu ✅`});
    },
};