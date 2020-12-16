var Discord  =  require('../Discord/ProcessDS');
var Mysql    =  require('./ProcessSql');
var config   =  require('../configuration.json');

module.exports.get = async (secret) => {
    var id = await Mysql.getID(secret);
    if(id == 0) return 1;
    
    console.log(id);

    var guild = await Mysql.getGuild(id);
    if(guild == 0) return 2;

    if(!Discord.guilds.has(id)) return 3;
    var server = Discord.guilds.get(id);
    
    guild.discordData = server;

    return guild;
}

module.exports.set = async (secret, guild) => {
    var query = Mysql.format("UPDATE `Guilds` SET Language=?, Prefix=?, Stat_Enabled=?, Stat_Channels=?, Clans=?, Report_Enabled=?, Report_Admin=?, Report_Public=? " +
    "WHERE ID=?", [guild.Language, guild.Prefix, guild.Stat_Enabled, JSON.stringify(guild.Stat_Channels),
    JSON.stringify(guild.Clans), guild.Report_Enabled, guild.Report_Admin, guild.Report_Public, id]);

    var id = await Mysql.getID(secret);
    if(secret == 0) return 0;
        
    var dbGuild = await Mysql.getGuild(id);
    if(dbGuild == 0) return 0;
    
    if(!Discord.guilds.has(id)) return 0;
    var server = Discord.guilds.get(id);

    return await Mysql.query(query);

}