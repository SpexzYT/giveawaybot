module.exports = (client, member) => {
    client.guild.cache.send(`Welcome <@${member.id}> to ${member.guild.name}! We Now Have ${member.guild.members.cache.size} members!`)
}