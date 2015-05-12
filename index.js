var config = require('./config.json');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.sendFile('index.html',{ root: __dirname+'/app/views/'});
});
var server = app.listen(3000, function () {

});

app.use('/assets', express.static(__dirname + '/app/assets'));
