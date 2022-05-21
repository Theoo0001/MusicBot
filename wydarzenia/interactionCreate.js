module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Brak aktualnie odtwarzanej muzyki... ❌`, ephemeral: true, components: [] });

            int.member.send(`Zapisałeś ścieżkę ${queue.current.title} | ${queue.current.author} z serwera ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Tytuł muzyki wysłałem Ci w wiadomościach prywatnych ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Nie można wysłać Ci prywatnej wiadomości... ❌`, ephemeral: true, components: [] });
            });
        }
    }
};