# MaidAPI
# The request-based API for KartonMaid Discord bot!
--!Beta version basedon `GEET` requests. Next versions we are going to the POST
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
***Guild Object**
(Unavialable)

### {IP}:{port}/set
| Value |               Description           |      Type     |
|-------|-------------------------------------|---------------|
|secret | Your Secret Developer Token         |   `String`    |
|data   | New Guild class (or only one value) | `JSON string` |