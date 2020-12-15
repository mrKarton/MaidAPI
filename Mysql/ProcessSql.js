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

    res.forEach(guild => {
        if(guild.ID == id)
        {
            return guild;
        }
    })

    return 0;
}

exports.getSecrets = async () => {
    const [res] = await (await connection).query('SELECT * FROM `API_Secrets`');

    return res;
}

exports.getID = async (secret) => {
    const [res] = await (await connection).query('SELECT * FROM `API_Secrets`');

    res.forEach(pare => {
        if(pare.Secret == secret)
        {
            return pare.Guild;
        }
    });

    return 0;
}

exports.query = async (query) => {
    const [res] = await (await connection).query(query);

    return res;
}