/**
 * New node file
 */
var fs = require('fs');
fs.exists('text.txt', function(exists) {
	if(exists){
		fs.readFile('text.txt', function(err, data) {
			if(err){
				return err;
			}
			fs.writeFile('cpytext.txt', data, function() {
				console.log('file is copied');
			});
		});
	}
});

var path = require('path');
console.log(path.join(__dirname ,'ll'));

var http = require('http');
var server = http.createServer(function(request, response) {
	
	console.log(request);
	
	response.writeHead(200);
	response.end(request.method);
});
server.listen(8001);
console.log('server listening at 8001');