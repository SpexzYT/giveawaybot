const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: 'ban',
    aliases: ['b', 'Ban', 'BAN'],
    description: 'bans a user from a server',
    async execute(message, args) {
        mentionedMember = message.guild.member(message.mentions.users.first()); 
        const reason = args.slice(2).join(" ")
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**You do not have permissions to ban someone from this server!**')
      if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('**I do not have permissions to ban members!**')
      if (!args[1]) return message.channel.send('**I would need for you to mention someone that you would like for me to ban!** `!ban @user [Reason]`. ')
      if (!mentionedMember) return message.channel.send('**I am not able to ban this user, if there is a issue than contact the bot developer!**')
      if (mentionedMember.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
          return message.channel.send('**You are not able to ban this user, this user must have a higher role than you!**')
      }
      if (mentionedMember.id === message.author.id) return message.channel.send('**You are not able to ban yourself from the server!**')
      if   (mentionedMember.bannable) {
          var embed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL())
          .setThumbnail(mentionedMember.user.displayAvatarURL())
          .setFooter('This action was a success!')
          .setColor('YELLOW')
          .setDescription(`
          **Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
          **Action:** Ban
          **Reason:** ${reason || "Undefined"}
          **Channel:** <#${message.channel.id}>
          **Time:** ${moment().format('llll')}
                      `)
                      message.channel.send(embed)
                      await mentionedMember.send(embed)
                      message.guild.channels.cache.get('743961000977498305').send(embed)
                      mentionedMember.ban()
                    } else {
                        return message.channel.send('I do not have permissions to ban this member, make sure that my role is higher than theres!')
                    }
                    return undefined;
            
   
      


        if (Member.id === message.author.id)
            return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: ` ** You Can 't Ban Your Self!**`
                }
            });

        if (Member.id === client.user.id)
            return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `**You Can't Ban me**`
                }
            });

        if (Member.id === message.guild.owner.user.id)
            return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `**You Can't Ban the Server Owner**`
                }
            });

        let Reason = args.slice(1).join(" ");

        let User = message.guild.member(Member);

        let BotRole = message.guild.member(message.guild.me).roles.highest.position;

        let Role = User.roles.highest.position;

        let UserRole = message.member.roles.highest.position;

        if (UserRole <= Role) return message.channel.send({
            embed: {
                color: 0x4D5E94,
                description: `**I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As You!**`
            }
        });

        if (BotRole <= Role) return message.channel.send({
            embed: {
                color: 0x4D5E94,
                description: `**I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As Me!**`
            }
        });

        if (!User.bannable) return message.channel.send({
            embed: {
                color: 0x4D5E94,
                description: `**I Can't Ban That Member!**`
            }
        })

        try {
            setTimeout(function() {
                User.ban({ reason: `${Reason || "No Reason Provided!"}` });
            }, 2000);
            let embed = new Discord.MessageEmbed()
                .setColor('#2C2F33')
                .setTitle(`Member Banned!`)
                .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
                .addField(`Banned Member`, `${Member.tag} (${Member.id})`)
                .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp();
            if (User && Member.bot === false)
                Member.send(
                    `You Have Been Banned From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
                );
            message.channel.send(embed);
        } catch (error) {
            return message.channel
                .send({
                    embed: {
                        color: 0x4D5E94,
                        description: `**I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!**`
                    }
                })
                .then(() => console.log(error));
        }}

}