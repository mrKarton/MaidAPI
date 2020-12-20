var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');
var Helping  =  require('../../Helps');

module.exports = (app) => {
    app.get('/get', (req, res)=>{
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}

        var secret = req.query.key;
        Guilds.get(secret).then(guild => {res.send(JSON.stringify(guild))});
    });

    app.post('/set', async (req, res) =>{
        
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}
        var guild = await await Mysql.getGuild(id);

        var guildParts = JSON.parse(req.query.data);

        var newGuild = Helping.objects(guild, guildParts);

        Guilds.set(secret, newGuild);
    })
}