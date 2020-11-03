const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    category: "info",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor(`RANDOM`)
            .setTitle(`${client.user.tag}'s Help Page | Info Page!`)
            .setDescription(`Hi, I Am ${client.user.name}, Im Also Spexz's Giveaway Manager! My Prefix Is **g!**, Or You Can Customize It By Running **g!prefix <prefix>**! To See My Commands Run **g!commands**!`)
        await message.channel.send(embed)
    }
}