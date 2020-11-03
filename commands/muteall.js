module.exports = {
    name: "muteall",
    aliases: ["ma"],

    run: async(client, message, args) => {
      const msg = await message.channel.send('react to mute and remove the mute!')
      await msg.react('🔇');

      client.on('messageReactionRemove', (reaction, user) => {
        if (user.bot) return
        if (reaction.emoji.name === '🔇') {
        if (message.member.voice.channel) {
          let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
          for (const [memberID, member] of channel.members) {
            member.voice.setMute(false);
          }
        }
      }
      })

      client.on('messageReactionAdd', (reaction, user) => {
        if (user.bot) return 
        if (reaction.emoji.name === '🔇') {
        if (message.member.voice.channel) {
          let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
          for (const [memberID, member] of channel.members) {
          
            member.voice.setMute(true);
          }
        }
      }
      })
  
      }
    }