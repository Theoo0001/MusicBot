const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Wystąpił błąd z kolejką; ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Wystąpił błąd z połączenia ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Uruchomiono utwór ${track.title} na kanale ${queue.connection.channel.name} 🎧`, iconURL: track.requestedBy.avatarURL()})
    .setColor('#13f857')

    const back = new ButtonBuilder()
    .setLabel('Powrót')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Pomiń')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Wznów & Wstrzymaj')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Zapętlij')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Kolejka')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
   
    queue.metadata.send(`Utwór ${track.title} został wprowadzony do kolejki! ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Zostałem odłączony od kanału głosowego, usuwając całkowitą kolejkę... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nie ma żadnej osoby na kanale głosowym ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Zakończono odtwarzanie całej kolejki ✅');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`Wszystkie utwory z listy odtwarzania zostały dodane do kolejki ✅`);
});