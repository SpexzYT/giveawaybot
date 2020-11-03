const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "fortniteshop",
  category: "info",
  description: "Get info about the fortnite shop from today",
  aliases: ["fnshop"],
  usage: "FortniteShop",
  run: async (client, message, args) => {

     const fnembed = new MessageEmbed()
     .setTitle('Fortnite shop of the day!')
     .setDescription('Here is the shop from today')
     .setImage("http://ctk-api.herokuapp.com/fortnite-shop")
     message.channel.send(fnembed)
   
   
  }
}