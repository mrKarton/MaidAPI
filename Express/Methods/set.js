var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');
var Heling  =  require('../../Helps');

module.exports = async (app) => {
    app.get('/set', async (req, res) =>{
        
        if(typeof req.query.secret == 'undefined') return;

        var secret = req.query.secret;
        var id = await Mysql.getID(secret);
        if(id == 0) return;
        var guild = await await Mysql.getGuild(id);

        var guildParts = JSON.parse(req.query.data);

        var newGuild = Heling.objects(guild, guildParts);

        Guilds.set(secret, newGuild);
    })
}