const Discord = require("discord.js");

var prefix ="x/";

var bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("xheals mon chef");
    console.log("le bot à bien été connecté");
});

bot.on "message", async function(message){
    if (message.author.equal(bot.user))return;

    if(x!message.content.startsWith(prefix))return;

    var args = message.content.substring(PREFIX.length).split("");

    switch(args[0].toLowerCase()) {
        case"invite":
        message.channel.send("", {
            enbed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "Lien D'invitation discord"
                    value: "https://discord.gg/aZQ6Yez"
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à toous vos amis !",
                },
            }
        });
        break;
    }
}};

bot.login(process.env.TOKEN);
