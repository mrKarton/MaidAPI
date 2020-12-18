# MaidAPI
**The request-based API for KartonMaid Discord bot!**
--!Beta version basedon `GET` requests. Next versions we are going to the `POST`

## Note:
configuration.json structure:
```json
    {
    "token":"Discord Bot Token",
    "mysql":{
        "host":"host",
        "user":"user",
        "password":"pass",
        "database":"database name"
    },
    "port":8888
}
```

***All Express method files in `Express/Metods/...` path have to export function __with 1 argument__!***

## Fast Docs

### {IP}:{port}/get
| Value |           Description       |   Type   |
|-------|-----------------------------|----------|
|secret | Your Secret Developer Token | `String` |

Get Your Server Data


### {IP}:{port}/set
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|secret | Your Secret Developer Token         |   `String`    |
|data   | New Guild object (or only one value) | `JSON string` |

### Guild Object Structure
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|ID     | Guild Discord ID (snowlake)         |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes)     |
|Language| Language set on your server        | `String`      |
|Prefix | Bot's Prefix on server              | `String`      |
|Stat_Enabled | Is Server Statistic Enabled on your server | `Bool` |
|Stat_Channels| Array of your's stat channels ID | `String[3]`|
|Clans | Json serilized of your server's Clans object | `JSON String` |
|Report_Enabled | Is `Report` module enabled  | `Bool`        |
|Report_Admin   | ID of Admin's report channel| [Snowflake](https://discord.com/developers/docs/reference#snowflakes) |
|Report_Public  | ID of Public report channel | [Snowflake](https://discord.com/developers/docs/reference#snowflakes) |
|discordData **(ONLLY `/get` output)** | Discord JS `Guild` Class | [Discord JS Guild](https://discord.js.org/#/docs/main/stable/class/Guild)|  
