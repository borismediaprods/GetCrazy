var express = require('express');
var app = express();

app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

app.use('/', express.static(__dirname + '/public'));

app.use(function(req, res) {
	res.sendFile(__dirname + '/public/error.html');
});

app.listen(process.env.PORT || 8000, process.env.IP);