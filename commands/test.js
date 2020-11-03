module.exports = {
    name: "test",
    run: async(client, message, args) => {
        client.emit('guildMemberAdd, message.member');
        client.emit('guildMemberRemove, message.member');
    }
}