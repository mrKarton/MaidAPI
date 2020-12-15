var config  = require('../configuration.json');
var discord = require('discord.js');
var bot = new discord.Client;

module.exports.apply = (cb) =>{
    bot.login(config.token);

    bot.on('ready', () => {
        console.log('Connected to Discord');
        cb();
    })
}

module.exports.bot       =  bot;
module.exports.guilds    =  bot.guilds.cache;
module.exports.users     =  bot.users.cache;
module.exports.channels  =  bot.channels.cache;