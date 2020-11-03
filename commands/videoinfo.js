var fetchVideoInfo = require('updated-youtube-info');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "videoinfo",
    category: "🧰 Utilities",
    aliases: ["ytvideoinfo", "vidinfo"],
    usage: "<YOUTUBE VIDEO URL>",
    description: ['Gives you information about the specified video.'],
    cooldown: 3,
    run: async(client, message, args) => {
        if(!args[1]) return message.channel.send("Please specify a YouTube Video URL.");

        message.channel.startTyping()

        var urlsplit = args[1].split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);

        fetchVideoInfo(urlsplit[3]).then(function (videoInfo) {

            const embed = new MessageEmbed()
                .setTitle(videoInfo.title)
                .setURL(videoInfo.url)
                .setColor("BLUE")
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setThumbnail(videoInfo.thumbnailUrl)
                .setDescription(`**❯ Owner:** ${videoInfo.owner}
                                **❯ Published:** ${moment(videoInfo.datePublished).format('MM.DD.YYYY')}
                                **❯ Category:** ${videoInfo.genre}
                                **❯ Paid:** ${videoInfo.paid}
                                **❯ Unlisted:** ${videoInfo.unlisted}
                                **❯ Family friendly:** ${videoInfo.isFamilyFriendly}
                                **❯ Duration:** ${client.util.sectotime(videoInfo.duration)} minutes
                                **❯ Views:** ${client.util.formatNumber(videoInfo.views)}`)

            message.channel.send(embed);
            message.channel.stopTyping()
          });
    }
}