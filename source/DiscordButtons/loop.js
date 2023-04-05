const { QueueRepeatMode } = require('discord-player');
module.exports = async ({  inter, queue }) => { 

    const methods = ['disabled', 'track', 'queue'];

    if (!queue || !queue.playing) return inter.reply({ content: `❌ Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

    const repeatMode = queue.repeatMode

    if (repeatMode === 0) queue.setRepeatMode( QueueRepeatMode.TRACK)

    if (repeatMode === 1 ) queue.setRepeatMode( QueueRepeatMode.QUEUE)

    if (repeatMode === 2) queue.setRepeatMode( QueueRepeatMode.OFF)
    
    return inter.reply({ content: `Ustawiono zapętlenie na **${methods[queue.repeatMode]}**.✅`})



}