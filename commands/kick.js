const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "Kicks a member",
    cooldown: 30,
    async execute(message, args, client) {
        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user)

            if (member) {
                if (message.member.hasPermission('KICK_MEMBERS')) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle(`**Kicked member**`)
                        .setColor('RANDOM')
                        .addField('User kicked: ', user)
                        .setThumbnail(member.user.displayAvatarURL())

                    member.kick(`You were kicked from a server using ClodBot`).then(() => {
                        message.reply(embed)
                        console.log('Member kicked')
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                }
            } else if (!message.member.hasPermission('KICK_MEMBERS')) {
                message.channel.send(`**You do not have permission to kick ${user}`)
                return;
            } else {
                message.reply('That user isn\'t in this server')
                return;
            }
        } else {
            message.reply('Specify a **user** please')
            return;
        }
    }
}