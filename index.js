var http = require('http');

http.createServer(function (request,response) {

	response.writeHead(200);
	response.write('Hello World!');
	response.end('Hello World Works Here Too!');

}).listen(8080);