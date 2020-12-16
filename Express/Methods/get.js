var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');

module.exports = (app) => {
    app.get('/get', (req, res)=>{
        
        if(typeof req.query.secret == 'undefined') return;

        var secret = req.query.secret;
        Guilds.get(secret).then(guild => {res.send(JSON.stringify(guild))});
    })
}