'use strict';

var http = require("http");

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hola mundo jea node\n');
}).listen(8081);

console.log('Server running at localhost:8081');
