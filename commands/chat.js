const axios = require('axios');
module.exports = {
    name: "chat",
    category: ":tools: Utility",
    aliases: ["chat", "c"],
    description: "Chat With Bot",
    
    async run(client, message, args, flags) {


        const url = `https://some-random-api.ml/chatbot?message=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }
        await message.channel.send(data.response)
    }
}