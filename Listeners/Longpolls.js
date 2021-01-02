var DS = require('../Discord/ProcessDS');

module.exports.listenMessage = (id, res)=>{
    DS.bot.on('message', (message)=>{
        res.send(message);
    })
    
}