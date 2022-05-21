const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Ostatnie informacje z ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} temu **${client.ws.ping}ms** 🛰️`);
    },
};