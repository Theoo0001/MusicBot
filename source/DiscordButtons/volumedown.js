const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

        const vol = Math.floor(queue.volume - 5)

        if (vol < 0 ) return inter.reply({ content: `❌ ${inter.member} • Nie możesz już tego bardziej ściszyć!`, ephemeral: true })
        
        if (queue.volume === vol) return inter.reply({ content: `❌ ${inter.member} • Głośność, którą chcesz zmienić, jest już bieżąca!`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `Głośność została ustawiona na **${vol}**/**${maxVol}**% 🔊` : `❌ ${inter.member} • Wystąpił błąd... Spróbuj ponownie!`, ephemeral: true});
}