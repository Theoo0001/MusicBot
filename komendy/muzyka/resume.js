module.exports = {
    name: 'resume',
    description: 'Wznów odtwarzanie utworu',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ ${inter.member} • Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });
        

        if(!queue.connection.paused) return inter.reply({content: `❌ ${inter.member} • Utwór jest już odtwarzany!`, ephemeral: true})

        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `Bierzący utwór ${queue.current.title} został wznowiony ✅` : `❌ ${inter.member} • Wystąpił błąd! Spróbuj ponownie?`});
    },
};
