# MaidAPI
**The request-based API for KartonMaid Discord bot!**


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

# Fast Docs
Every request requires to send your Developer's Secret Token with GET requset as `key`. It is default setting. But if we are don't need them, we are mark it in Method Description. If in the description described one more `GET` value, it is don't cancels `key` requirement! 

> **Example:** `localhost:8888/get?key=Example`

## Methods

### /get
**Return: [Guild Object](#guild-object-structure)**


### /set `POST`
Update Your server data.

| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|data   | New [Guild Object](#guild-object-structure) (or only one value) | `JSON string` |

> **Example:** `localhost:8888/set?key=Example` 

**POST Body:**
```json
{
    "Prefix":".",
    "Language":"en"
}
```

### /user `GET`
Get user data
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|uid   | The user's ID                        |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes) as `string` |

**Return: [Discord.JS User class](https://discord.js.org/#/docs/main/stable/class/User)**

> **Example** `localhost:888/user?key=Example&uid=471976309598322700`

**USER MUST HAVE MEMBERSHIP IN YOUR SERVER**

### /member `GET`
Get member's data
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|uid   | The user's ID                        |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes) as `string` |

**Return: [Discord.JS GuildMemberr class](https://discord.js.org/#/docs/main/stable/class/GuildMember)**

> **Example** `localhost:888/member?key=Example&uid=471976309598322700`

**USER MUST HAVE MEMBERSHIP IN YOUR SERVER**

### /send `POST`
Send message in channel
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|channel| Channel ID                          |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes) as `string` |
|data   | Message Data                        | [Outgoing Message](#outgoing-message-object-structure) |

### /DM `POST`
Send message as DM
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|user   | User ID                             |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes) as `string` |
|data   | Message Data                        | [Outgoing Message](#outgoing-message-object-structure) |

### /send `POST`
Reply to message(DM is not supported)
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|channel| Channel ID                          |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes) as `string` |
|message| Message ID                          |  [Snowflake](https://discord.com/developers/docs/reference#snowflakes) as `string` |
|data   | Message Data                        | [Outgoing Message](#outgoing-message-object-structure) |

### /version
* `Key` is not needed
Get version and changelog of API

## Objects

##### Guild Object Structure

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
|discordData **(ONLY `/get` output)** | Discord JS `Guild` Class | [Discord JS Guild](https://discord.js.org/#/docs/main/stable/class/Guild)|  

##### Outgoing Message Object Structure
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|Content|The text of the mesage               |`String`       |
(Developing)

