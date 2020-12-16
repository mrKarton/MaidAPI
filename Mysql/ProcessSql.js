var config = require('../configuration.json');
var mysql = require('../node_modules/mysql2/promise');
var connection = mysql.createConnection(config.mysql);

exports.format = mysql.format;

exports.getGuilds = async () => {
    const [res] = await (await connection).query('SELECT * FROM `Guilds`');

    return res;
}

exports.getGuild = async (id) => {
    const [res] = await (await connection).query('SELECT * FROM `Guilds`');

    var rt = 0;

    res.forEach(guild => {
        if(guild.ID == id)
        {
            rt =  guild;
        }
    })

    return rt;
}

exports.getSecrets = async () => {
    const [res] = await (await connection).query('SELECT * FROM `API_Secrets`');

    return res;
}

exports.getID = async (secret) => {
    const [res] = await (await connection).query('SELECT * FROM `API_Secrets`');
    var rt = 0;

    res.forEach(pare => {
        if(pare.Secret == secret)
        {
            rt = pare.Guild;
        }
    });

    return rt;
}

exports.query = async (query) => {
    const [res] = await (await connection).query(query);

    return res;
}