var express = require('express');
var app = express();

app.get('/', function(req, rest) {
	res.send('Hello Express');
}

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});