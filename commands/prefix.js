module.exports = {
    name: "prefix",
    run: async(client, message, args) => {
        let prefix = args.join(" ")
        if(!prefix) return message.reply("Please Enter A Prefix!")
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("❌ - Missing Permissions - Admin!")
        client.db.set(`${message.guild.id}-prefix`, prefix)
        return message.channel.send(`I Set The Server Prefix To **${prefix}**`)
    }
}