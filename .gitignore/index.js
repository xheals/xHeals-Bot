const Discord = require("discord.js");

var prefix = "x/";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("x/help");
    console.log("le bot à bien été connecté");
});

bot.on("message", async function(message) {
    if(message.author.equals(bot.user)) return;

    if(x/message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.lengh).split("";)

    switch(args[0].toLowerCase()) {
        case "invite"
        message.channel.send("", {
            enbed:{
                color:0xFF0000
                author:
                title:
                fields[{
                    name: "Lien d'invitation discord",
                    value: "https://discord.gg/aZQ6Yez",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à tous vos amis",
                },
            }
        })
        break;
    }
});
bot.login(process.env.TOKEN);
