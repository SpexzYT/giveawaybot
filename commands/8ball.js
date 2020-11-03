const { MessageEmbed } = require("discord.js");
const answers = [    "Yes.",
    "No.",
    "My sources say yes",
    "Most likely.",
    "idk",
    "maybe sometime",
    "Outlook good.",
    "Signs point to yes.",
    "Definitely",
    "Absolutely",
    "Nope.",
    "No thanks, I won’t be able to make it.",
    "No Way!",
    " It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes."]

module.exports = {
    name: "8ball",
    description: "8Ball",
    category: "games",
    run: (client, message, args) => {
        const question = args.join(" ");

        if (!question) return message.channel.send("Please provide a valid question");

        const answer = answers[Math.floor(Math.random() * answers.length)];

        const embed = new MessageEmbed()
            .setTitle("8Ball")
            .addField("Question:", question)
            .addField("Answer:", answer)
            .setColor("BLUE")
            .setFooter(message.author.username)
            .setTimestamp();

        message.channel.send(embed);
    }
};