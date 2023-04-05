const { EmbedBuilder, InteractionType } = require('discord.js');

module.exports = (client, inter) => {
    if (inter.type === InteractionType.ApplicationCommand) {
        const DJ = client.config.opt.DJ;
        const command = client.commands.get(inter.commandName);

    if (!command) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription('❌ | Wystąpił błąd! Skontaktuj się z developerami!')], ephemeral: true, }), client.slash.delete(inter.commandName)
    if (command.permissions && !inter.member.permissions.has(command.permissions)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`❌ | Nie posiadasz odpowiednich uprawnień, aby użyć tego polecenia!`)], ephemeral: true, })
    if (DJ.enabled && DJ.commands.includes(command) && !inter.member._roles.includes(inter.guild.roles.cache.find(x => x.name === DJ.roleName).id)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`❌ | To polecenie jest dostępne tylko i wyłącznie dla użytkowników z \`${DJ.roleName}\` `)], ephemeral: true, })
    if (command.voiceChannel) {
            if (!inter.member.voice.channel) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`❌ | Nie jesteś na kanale głosowym!`)], ephemeral: true, })
            if (inter.guild.members.me.voice.channel && inter.member.voice.channel.id !== inter.guild.members.me.voice.channel.id) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`❌ | Nie jesteś na tym samym kanale głosowym!`)], ephemeral: true, })
       }
        command.execute({ inter, client });
    }
    if (inter.type === InteractionType.MessageComponent) {
        const customId = JSON.parse(inter.customId)
        const file_of_button = customId.ffb
        const queue = player.getQueue(inter.guildId);
        if (file_of_button) {
            delete require.cache[require.resolve(`../source/DiscordButtons/${file_of_button}.js`)];
            const button = require(`../source/DiscordButtons/${file_of_button}.js`)
            if (button) return button({ client, inter, customId, queue });
        }
    }
};