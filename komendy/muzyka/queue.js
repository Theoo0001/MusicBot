const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q', 'kolejka'],
    utilisation: '{prefix}kolejka',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Brak aktualnie odtwarzanej muzyki ${message.author}... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Brak muzyki w kolejce po aktualnej ${message.author}... ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Kolejka serwera - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Na zlecenie : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `I **${songs - 5}** innych piosenek...` : `Na liście odtwarzania **${songs}** piosenek...`;

        embed.setDescription(`Aktualnie ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('Wyświetlono dla użytkownika ', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};