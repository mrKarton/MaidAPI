var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');
var Heling  =  require('../../Helps');

module.exports = async (app) => {
    app.post('/set', async (req, res) =>{
        
        if(typeof req.query.key == 'undefined') return;

        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(id == 0) return;
        var guild = await await Mysql.getGuild(id);

        var guildParts = JSON.parse(req.query.data);

        var newGuild = Heling.objects(guild, guildParts);

        Guilds.set(secret, newGuild);
    })
}