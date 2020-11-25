const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  client.guilds.forEach(guild => {
    let lewix = guild.channels.filter(c => c.type === "text").random();
    lewix.send(
      new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("Good news!")  
        .addField("Our Hello Bot Has A Sponsor Now")
        .addField("FatCat Hosting")
        .addField("**FatCat Hosting Discord Server**", " [Click](https://discord.gg/uu7F7ZJ)", )
        .addField("**FatCat Hosting Web Page**", " [Click](http://fatcat.bike/)", )
        .setThumbnail("https://cdn.discordapp.com/attachments/756164103265058887/756273004110938212/fatcat.png")
        .setFooter(client.user.username, client.user.avatarURL) 
    );
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkese-gönder", "herkese-söyle"],
  permLevel: 4
};

exports.help = {
  name: "herkese-mesaj",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "herkese-mesaj"
};