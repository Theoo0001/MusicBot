module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `❌ Nie odtworzyłem jeszcze żadnego utworu!`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Odtwarzam **poprzedni** utwór ✅`, ephemeral: true});
}
