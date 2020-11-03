const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "help 8ball",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`8ball Command`)
            .setColor("#FF0000")
            .addField(
            {
                name: "Catergory/Type: Fun ",
                Description: `Answers With A Randomized Yes Or No.`,
                Usage: `>8ball <question>`,
                inline: true
            }
        )
            .setFooter("Made By Spexz")

        await message.channel.send(embed)
    }
}