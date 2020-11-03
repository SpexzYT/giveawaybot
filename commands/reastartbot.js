module.exports = {
    name: "reastartbot",
    run: async (client, message, args) => {


if (!OwnerID.includes(message.author.id)) {
    return message.channel.send(`Only Bot Owner Can Use This Command!`);
  }

  bot.user.setActivity(`Restarting In 10 Seconds!`, { type: "PLAYING" });

  message.channel
    .send(`🛑 | Bot Is Going To Restart In 10 Seconds!`)
    .then(msg => {
      setTimeout(function() {
        bot.destroy().then(bot => bot.login(Token));
      }, 10000);
      setTimeout(function() {
        msg.edit(`✅ | Bot Has Been Restarted Successfully!`);
      }, 10000);
    });
}
}