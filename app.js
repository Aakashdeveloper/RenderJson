var express = require('express'),
   engines = require('consolidate'),
   fs = require("fs");

var port = 8000;
var app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

var contents = fs.readFileSync("data.json");

var jsonContent = JSON.parse(contents);
console.log(jsonContent);

app.get('/', function(req, res){
	//res.send(jsonContent);
	res.render('test', { data: jsonContent });
});

app.listen(port, function(){
	console.log("server running on port" +port);
});
