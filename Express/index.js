var config  =  require('../configuration.json');
var fs      =  require('fs');
var express =  require('express');
var app     =  express();

module.exports = () => {
    app.listen(config.port);

    app.get('/', (req, res) => {
        res.send("Welcome to MaidAPI");
        
    });

    fs.readdir('./Express/Methods', (err, files) => {
        console.log(files);
        let methodFiles = files.filter( f => f.split(".").pop() === 'js')
      
        methodFiles.forEach( evt => {
      
            const method = evt.split(".")[0];
            require(`./Methods/${method}`)(app);
        
        });
    });
}