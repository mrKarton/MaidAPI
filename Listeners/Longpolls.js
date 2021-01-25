var DS = require('../Discord/ProcessDS');

module.exports.listenMessage = (id, res)=>{
    // console.log(id, 'is listening for messages');
    var sended = false;

    DS.bot.on('message', (message)=>{
        if(!sended) 
        {
            if(message.guild.id == id) 
            {
                res.send(message);
                sended = true;
            }
        }
    })
    
}