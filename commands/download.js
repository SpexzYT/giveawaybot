const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (client, message, args) => {
     
    if(!args[0]) return message.reply("Me de o id do vídeo")

    const image = ('https://www.y2mate.com/themes/images/logo.png')
    
    let question = args.join("+");
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(`https://i.ytimg.com/vi/${question}/0.jpg`)
    .setTitle('📥 | YT Download')
    .setDescription(`[Mp3](https://www.y2mate.com/youtube-mp3/${question})\n\n[Mp4](https://www.y2mate.com/youtube/${question})`)
    .setFooter(`©Mystic - 2020`)
    
    message.channel.send({embed})
}