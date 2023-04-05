module.exports = {
    name: 'stop',
    description: 'Zatrzymaj utwór',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`❌ ${inter.member} • Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `Aktualny utwór został zatrzymany! ✅`});
    },
};