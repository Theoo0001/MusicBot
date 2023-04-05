const { readdirSync } = require('fs');
const { Collection } = require('discord.js');

client.commands = new Collection();
CommandsArray = [];



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
        if (command.name && command.description) {
        CommandsArray.push(command);
        console.log(`-> Wczytane polecenie ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`../komendy/${dirs}/${file}`)];
        } else console.log(`-> Wystąpił błąd z poleceniem ${command.name.toLowerCase()}`)
    };
});

client.on('ready', (client) => {
 if (client.config.app.global) client.application.commands.set(CommandsArray)
  else client.guilds.cache.get(client.config.app.guild).commands.set(CommandsArray)
})