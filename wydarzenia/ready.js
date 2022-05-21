module.exports = async (client) => {
    client.user.setActivity(client.config.app.playing);
};