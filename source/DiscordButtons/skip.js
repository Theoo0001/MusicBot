module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `Utwór ${queue.current.title} został pominięty ✅` : `❌ ${inter.member} • Wystąpił błąd... Spróbuj ponownie!`, ephemeral: true});
}