const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Wyświetl utwory w kolejce',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ ${inter.member} • Aktualnie żaden utwór nie jest odtwarzany!`, ephemeral: true });

        if (!queue.tracks[0]) return  inter.reply({ content: `❌ ${inter.member} • W kolejce nie znajduje się żaden następny utwór!`, ephemeral: true });

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `I **${songs - 5}** innych utworów...` : `Na liście odtwarzania **${songs}** utworów...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Odtworzono przez: ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Kolejka serwera - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Aktualny utwór to ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()
        .setFooter({ text: 'Odtworzono przez użytkownika ${track.requestedBy.username}) ', iconURL: inter.member.avatarURL({ dynamic: true })})

        inter.reply({ embeds: [embed] });
    },
};