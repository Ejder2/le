const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor('GREEN')
		.setTitle('Lewix Bot Aktif !')
        .addField("» **Pingim**", client.ping+" ms", true)       
        .setFooter(`Bot Yeni Açıldığından Ping Olması Normaldir.`, client.user.avatarURL) 
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aktif", "lewix-aktifmi"],
  permLevel: 4
};

exports.help = {
  name: "AKTİFLİK-TEST",
  description: "Lewix Botu Davet Et",
  usage: "aktifmisin"
};