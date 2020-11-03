const { MessageEmbed, DiscordAPIError } = require('discord.js');

module.exports = {
    name: "annouce",
    run: async (client, message, args) => {
        const guild = message.guild;
        
        try {
            message.delete();
            message.channel.send(new MessageEmbed()
                .setColor(config.err_colour)
                .setTitle(text.embedTitle)
                .setDescription(`**${args.join(' ')}**`)
                .setFooter(config.serverName, guild.iconURL())
            );
            log.warn(logText.sentSuccesful
				.replace("{{ messageText }}", `\`${args.join(' ')}\``));
		} catch (error) {
            log.warn(logText.sentError
				.replace("{{ errorBlock }}", `\`${error.message}\``));
			log.error(error);
		}

    },
  };