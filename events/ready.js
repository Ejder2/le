const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "🔥 Gelişitirici - ๖ۣۜŁewîx#1881",
        "✨ g!yardım Yayında",
        "⭐ Lewix Giveaways - discord.gg/JJaGzcc",
        "🌐 Sponsor - FatCat Hosting - fatcat.bike ",
        "💪 7/24 Aktif ",
        "💥 Botumuzu Davet Et g!davet"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://discord.gg/EjthYcP" );
        }, 2 * 3500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oynuyor kısmı ayarlandı !`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an Çalışıyor`); 
};

//client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);