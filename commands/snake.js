const SnakeGame = require('snakecord');
const Discord = require("discord.js") //V.12 only
module.exports = {
    name: "snake",
    description: "Let play snake game",
    aliases: [],
    run: async(client, message, args) => {
    const snakeGame = new SnakeGame({
      title: 'Snake Game',
      color: "RANDOM",
      timestamp: true,
      gameOverTitle: "Game Over"
    })

    snakeGame.newGame(message);
}}