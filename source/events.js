player.on('error', (queue, error) => {
    console.log(`Błąd emitowany z kolejki ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Błąd emitowany z połączenia ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Zacząłem grać ${track.title} na kanale **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Ścieżka ${track.title} została wprowadzona w kolejke ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Zostałem ręcznie odłączony od kanału głosowego, wyłączam kolejkę... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nikt nie jest w kanale głosowym, opuszczając kanał głosowy... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Skończyłem odtwarzać całą kolejkę ✅');
});