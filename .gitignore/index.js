const Discord = require('discord.js')
const Bot = new Discord.Client()

var token_login = "NDgxMTIxNDczNzIxNzk0NTYw.DlzIAQ.eoej6EWMGgb9vYAa9xSH4BU7oec"
var prefix = "/"

Bot.on('ready', () => {

console.log("Bot prêt");
});

bot.on("ready", function() {
    bot.user.setGame("/help");

  if(command === prefix + "mute"){

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
    let role = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
    if(!role){
      try {
        role = await message.guild.createRole({
          name: "Utilisateurs mutés",
          color:"#000000",
          permissions:[]
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');

    await(toMute.addRole(role));
    message.channel.send("Je l'ai muté !");

    return;
  }

});

Bot.login(token_login);
