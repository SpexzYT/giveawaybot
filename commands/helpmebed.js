const Discord = require('discord.js')
const pagination = require('discord.js-pagination')
module.exports = {
  name: "helpinfo",
  aliases: ["help","sendmentalhelppls"],
  description: "Displays the bot commands list.",
  execute: async(client, message, args) => {
      const main = new Discord.MessageEmbed() // basic embed structure example.
        .setDescription('**Embed Page Help Menu**')
        .setTitle(`📜 ${client.user.username} Help Menu`)
        .addField(`**\`>help(this)\`**`, `Basic embed page using pagination\n**Usage:** \`>helpinfo\``)
        .addField(`**\`!helloworld\`**`, `Basic embed page using pagination\n**Usage:** \`!helloworld\``)
        .setColor(`RANDOM`)

        const pages = [
                main // You can add as many pages you want just add a comma after thr previous page name.
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
  }
} 