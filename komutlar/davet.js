const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("GREEN")
        .addField("**Beni Sunucuna Davet Etmek İçin**", " [Tıkla](https://discord.com/oauth2/authorize?client_id=748600559417950229&scope=bot&permissions=805829694)" )
        .addField("Botun Web Sitesine Gitmek İçin ", "[Tıkla](https://lewix-bot-web.glitch.me/)")
        .addField("Yardıma mı İhtiyacın Var ?", "**g!yardım Yaz**")
        .setThumbnail("https://cdn.discordapp.com/attachments/749248734419746847/759489713676484649/Lewix.png")
        .setFooter(`Lewix Bot Davet Sistemi`, client.user.avatarURL) 
    );
	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet", "lewix"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Lewix Botu Davet Et",
  usage: "davet"
};