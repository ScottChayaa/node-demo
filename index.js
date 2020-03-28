var express = require('express');
var app = express();

app.get('/', function (req, res) {
    let str = 'Hello World! 1.2';
    res.send(str);
    console.log(str);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at 'http://%s:%s'", host, port);
});