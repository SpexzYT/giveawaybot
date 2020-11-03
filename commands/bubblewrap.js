const Discord = require('discord.js')

module.exports = {
    name: "bubblewrap",
    description: "Play with some Bubble Wrap!",
    aliases: ['bw'],
    cooldown: 10,
    execute(message, args, client) {
        message.channel.send(`
 Here's your bubble wrap!

||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||
`)
console.log('BUBBLE WRAP!')
    }
}