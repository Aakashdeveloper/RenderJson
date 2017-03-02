var express = require('express');
var port = 8000;
var app = express();

app.get('/', function(req, res){
	res.send("hello worlds");
	//res.render('test', { data: jsonContent });
});
app.get('/books', function(req, res){
	res.send("books are here");
	//res.render('test', { data: jsonContent });
});

app.listen(port, function(){
	console.log("server running on port" +port);
});
