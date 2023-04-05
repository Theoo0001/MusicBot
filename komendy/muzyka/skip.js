module.exports = {
    name: 'skip',
    description: 'Pomiń bierzący utwór',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`❌ ${inter.member} • Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `Bierzący utwór ${queue.current.title} został przewinięty ✅` : `❌ ${inter.member} • Wystąpił błąd! Spróbuj ponownie?`});
    },
};