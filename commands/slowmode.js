const discord = require("discord.js");

module.exports = {
  name: "slowmode",
  description: "Set slowmode to a channel",
  aliases: ["sw", "slowmode"],
  cooldown: "0",
    run: async (client, message, args) => {{
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.delete();
    var num = args.join(" ");
    var cdwn = message.channel.rateLimitPerUser;
    if (num > 1000)
      return message.channel.send(
        "You cannot set slowmode to more than `21600` seconds."
      );
    if (!num) {
      message.channel.send(
        `Current slowmode for this channel is \`${cdwn}\` seconds.`
      );
    } else {
      message.channel.setRateLimitPerUser(num).then(() => {
        message.channel.send(`Slowmode changed to \`${num}\` seconds.`);
      });
    }
  
    }
}
};