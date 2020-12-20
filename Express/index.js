var config  =  require('../configuration.json');
var fs      =  require('fs');
var express =  require('express');
var app     =  express();
var bodyPareser = require('body-parser');

module.exports = () => {
    app.listen(config.port);
    app.use(bodyPareser.json());
    app.use(bodyPareser.urlencoded({extended:true}));

    app.get('/', (req, res) => {
        res.send("Welcome to MaidAPI");
    });

    app.get('/version', (req, res)=>{
        res.send(require('../version.json'));
    })

    fs.readdir('./Express/Methods', (err, files) => {
        console.log(files);
        let methodFiles = files.filter( f => f.split(".").pop() === 'js')
      
        methodFiles.forEach( evt => {
      
            const method = evt.split(".")[0];
            require(`./Methods/${method}`)(app);
        
        });
    });
}