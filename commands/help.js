const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "help",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`${client.user.tag}'s Commands`)
            .setColor("#FF0000")
            .setDescription("`trivia`, `8ball`, `announcement`, `avatar`, `ban`, `binary`, `botinfo`, `buublewrap`, `chat`, `clear`, `corona`, `decode`, `docs`, `download`, `emoji`, `fortniteshop`, `give-role`, `guilds`, `hangman`, `googleimage`, `roll`, `help(this)`, `invites`, `kick`, `lock`, `lyrics`, `meme`, `muteall`, `ping`, `prefix`, `rradd`, `rrdel`, `giveaway` `reatstartbot`, `serverinfo`, `slowmode`, `snake`, `snipe`, `bans`, `unban`, `unlock`, `userinfo`, `vidinfo` `warn`, `warns`, `report`")
            .setFooter("Made By Spexz")

        await message.channel.send(embed)
    }
}