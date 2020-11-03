module.exports = (client, member) => {
    client.guild.cache.send(`Sadly, <@${member.user.tag}> has left us :( We hope you enjoyed your stay! We Now Have ${member.guild.members.cache.size} members!`)
}