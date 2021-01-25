var Guilds  =  require('../../Mysql/Guilds');
var Mysql   =  require('../../Mysql/ProcessSql');
var Helping  =  require('../../Helps');
var Longpolls = require('../../Listeners/Longpolls');

module.exports = (app) => {
    app.post('/lp/messages', async (req, res)=> {
        var id = await Mysql.getID(req.query.key);
        // console.log(id, 'is trying to listen messages');
        if(id == 0) return;
        Longpolls.listenMessage(id, res);
    })
}