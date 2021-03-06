var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':true}));

app.get('/', function(request, response) {
	response.send({
	'foo': 'bar'
	});
});
     
app.post('/otherRoute', function(request, response){
	var param = request.param('foo');
	response.send({
	foo: param
 	});
});

app.listen(3000);