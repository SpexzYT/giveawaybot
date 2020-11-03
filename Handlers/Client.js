const { Client, MessageEmbed, Collection } = require ('discord.js')
const fs = require('fs')
const prefix = ">"
const memberAdd = require('./Events/guildMemberAdd');
const memberRemove = require('./Events/guildMemberRemove');
const Enmap = require('enmap');
const Discord = require('discord.js');
const request = require('request-promise');
const cheerio = require('cheerio');
class Lynx extends Client {
    constructor() {
        super();
        this.discord = require('discord.js')
        this.commands = new Collection();
        this.db = new Enmap({ name: "LynxDB" });
    }
    

    commandHandler() {
        const files = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));
        for(const file of files) {
            const command = require(`../commands/${file}`);
            this.commands.set(command.name, command)
        }
    }

    start(token) {
        this.login(token);
        this.commandHandler();
        this.on('ready', () => console.log("Ready!"))
        this.on('message', async(message) => {
            let prefix = this.db.get(`${message.guild.id}-prefix`) || ">";
            if(message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            const command = this.commands.get(cmd);
            if(!command) return;
            return command.run(this, message, args).catch(console.error)
            
        })
        this.on('guildMemberAdd', async(member) => {
            memberAdd(this, member);
        })
        this.on('guildMemberRemove', async(member) => {
            memberRemove(this, member);
        })
this.login(token);
        this.snipes = new Map() // whatever you define your client as

    this.on('messageDelete', function(message, channel){
    this.snipes.set(message.channel.id,{
  content: message.content, 
  author: message.author, 
  image: message.attachments.first() ? message.attachments.first().proxyURL : null
  });
});
        
    }
}

module.exports = Lynx;