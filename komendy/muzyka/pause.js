module.exports = {
    name: 'pause',
    description: 'Zatrzymaj utwór',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ ${inter.member} • Aktualnie żaden utwór nie jest odtwarzany!`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'Utwór jest obecnie wstrzymany!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `❌ ${inter.member} • Ten utwór jest (już) obecnie wstrzymany!`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `Aktualny utwór ${queue.current.title} został zatrzymany ✅` : `❌ ${inter.member} • Wystąpił błąd... Spróbuj ponownie!` });
    },
};
