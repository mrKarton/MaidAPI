var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');
var Helping =  require('../../Helps');
var Discord =  require('../../Discord/ProcessDS');
module.exports = (app) => {
    app.post('/send', async (req, res)=>{
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        console.log(secret, id);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}

        var channelID = req.body.channel;

        var content = req.body.data.content;

        if(!Discord.guilds.get(id).channels.cache.has(channelID) || Discord.channels.get(channelID).type =='voice') 
        {res.send('{"success":false, "message":"Channel not found"}'); return;}

        var mid = await Discord.channels.get(channelID).send(content);

        res.send(mid.id);
    });

    app.post('/DM', async (req, res)=>{
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}

        var channelID = req.body.user;

        var content = req.body.data.content;
        if(!Discord.guilds.get(id).members.cache.has(req.query.uid)) {res.send('{"success":false, "message":"User not found"}'); return;}
        var mid = await Discord.guilds.get(id).members.cache.get(req.query.uid).user.send(content);

        res.send(mid.id);
    });

    app.post('/reply', async (req, res)=>{
        if(typeof req.query.key == 'undefined') return;
        var secret = req.query.key;
        var id = await Mysql.getID(secret);
        if(!Discord.guilds.has(id)) {res.send('{"success":false, "message":"Guild Not found or Key wrong"}'); return;}

        var channelID = req.body.channel;
        var mid = req.body.message;

        if(!Discord.guilds.get(id).channels.cache.has(channelID) || Discord.channels.get(channelID).type =='voice') 
        {res.send('{"success":false, "message":"Channel not found"}'); return;}

        var channel = Discord.channels.get(channelID);
        var message = await channel.messages.fetch(mid);
        // console.log(message);
        res.send(await message.reply(req.body.data.content).id);

        // res.send(mid.id);
    });

}