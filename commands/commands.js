const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "commands",
    category: "info",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Commands!`)
            .setDescription("`g!prefix`: Changes The Server Prefix - Usage: g!prefix <prefix> | `g!giveaway`: Creates A Giveaway - Usage: g!giveaway <time> <channel> <prize>")
        await message.channel.send(embed)
    }
}