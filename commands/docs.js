const fetch = require('node-fetch');

module.exports = {
    name: "docs",
    description: "Shows Complete Docs Of DJS",
    category: ":tools: Utility",
    aliases: ["djs"],

    async run(client, message, args, tools) {

const query = args.join(' ');

const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

fetch(url)

    .then(res => res.json())
    .then(embed => {

        if (embed && !embed.error) {

            message.channel.send({ embed });
        } else {

            message.reply(`No Such Result Found for **"${query}"**`);
        }
    })
    .catch(e => {

        console.error(e);
        message.reply('Darn it! I failed!');
    })
}
}