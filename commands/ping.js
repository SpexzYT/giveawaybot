module.exports = {
    name: "ping",
    run: async(client, message, args) => {
        return message.channel.send(`
        WebSocket Ping: ${client.ws.ping}ms!`)
    }
}