const { readdirSync } = require('fs');
const { Collection } = require('discord.js');

client.commands = new Collection();

const events = readdirSync('./wydarzenia/').filter(file => file.endsWith('.js'));

console.log(`Wczytuję wydarzenia...`);

for (const file of events) {
    const event = require(`../wydarzenia/${file}`);
    console.log(`-> Wczytano wydarzenie ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`../wydarzenia/${file}`)];
};

console.log(`Wczytuje polecenia...`);

readdirSync('./komendy/').forEach(dirs => {
    const commands = readdirSync(`./komendy/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`../komendy/${dirs}/${file}`);
        console.log(`-> Wczytane polecenie ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`../komendy/${dirs}/${file}`)];
    };
});