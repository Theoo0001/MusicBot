module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `Aktualny utwór ${queue.current.title} został wstrzymany ✅` : `Utwór ${queue.current.title} został wznowiony ✅`}`, ephemeral: true});
}