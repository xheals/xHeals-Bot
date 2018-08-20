const Discord = require("discord.js");

var bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("xheals c'est mon chef");
    console.log("le bot à bien été connecté");
});

bot.login("NDgxMTIxNDczNzIxNzk0NTYw.Dlx6CA.b-7KQQR6HUoQAZoF4YJmvbJwOgU");
