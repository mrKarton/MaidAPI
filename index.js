var config      =  require('./configuration.json');
var mysql       =  require('./Mysql/ProcessSql');
var discord     =  require('./Discord/ProcessDS');
var functions   =  require('./Helps');
var guildFungions      =  require('./Mysql/Guilds');
discord.apply(async () => {                 //All index code starting here, after connecting to JS
    var secrets = await mysql.getSecrets();
    var guilds = new Array();
    secrets.forEach(secret => {
        guilds.push(secret.Guild);
    })

    discord.guilds.keyArray().forEach(id => {
        if(guilds.indexOf(id) == -1)
        {
            mysql.query(mysql.format('INSERT INTO `API_Secrets`(Guild,Secret,Beta) VALUES(?,?,0)', [id, functions.generateSecret()]));
        }
    });

    guildFungions.get('Example').then(g => {console.log(g)});
});                                         //!Important! End code here to avoid Discord connection Bugs! (Only Discordless special functions)