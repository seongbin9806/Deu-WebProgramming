var express = require('express');
var app = express();

const hostname = '192.168.219.104';
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, hostname, function(){ 
    console.log(`app listening on ${hostname}:${port}!`);
});