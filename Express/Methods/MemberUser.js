var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');
var Discord = require('../../Discord/ProcessDS');
const { json } = require('body-parser');

module.exports = async (app) => {
    app.get('/user',async (req, res)=>{
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}

        res.send(Discord.guilds.get(id).members.cache.get(req.query.uid).user);
    });

    app.get('/member',async (req, res)=>{
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}

        res.send(Discord.guilds.get(id).members.cache.get(req.query.uid));
    });
}