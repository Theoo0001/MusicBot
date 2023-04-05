const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ Aktualnie nie odtwarzam żadnego utworu!`, ephemeral: true });

    const track = queue.current;

    const methods = ['disabled', 'track', 'queue'];

    const timestamp = queue.getPlayerTimestamp();

    const trackDuration = timestamp.progress == 'Nieskończony' ? 'Nieskończony (na żywo)' : track.duration;

    const progress = queue.createProgressBar();
    

    const embed = new EmbedBuilder()
    .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
    .setThumbnail(track.thumbnail)
    .setDescription(`Głośność **${queue.volume}**%\nCzas trwania **${trackDuration}**\nTryb pętli **${methods[queue.repeatMode]}**`)
    .setFooter({ text: 'Włączono przez użytkownika ${track.requestedBy}', iconURL: inter.member.avatarURL({ dynamic: true })})
    .setColor('ff0000')
    .setTimestamp()

    inter.reply({ embeds: [embed], ephemeral: true });
}