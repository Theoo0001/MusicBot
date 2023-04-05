const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remove',
    description: "Usuń utwór z kolejki",
    voiceChannel: true,
    options: [
        {
            name: 'Utwór',
            description: 'Nazwę/URL Utworu, który chcesz usunąć',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'Numer',
            description: 'Miejsce w kolejce, w którym znajduje się utwór',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ ${inter.member} • Aktualnie nie jest odtwarzany żaden z utworów!`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `❌ ${inter.member} • Musisz użyć jednej z opcji, aby usunąć utwór!`, ephemeral: true });

        if (track) {

        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.remove(song)
                return inter.reply({ content: `Usunięto utwór ${track} z kolejki ✅` });
            }

        }

        return inter.reply({ content: `❌ ${inter.member} • Nie udało się znaleźć utworu ${track}... Spróbuj użyć adresu URL lub pełnej nazwy utworu`, ephemeral: true });    
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks[index].title

            if (!trackname) return inter.reply({ content: `❌ ${inter.member} • Mam wrażenie że ten numer utworu nie istnieje...`, ephemeral: true });   

            queue.remove(index);
            
            return inter.reply({ content: `Usunięto utwór ${trackname} z kolejki ✅` });
        }


         
    }
}