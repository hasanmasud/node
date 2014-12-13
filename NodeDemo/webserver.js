/**
 * Simply creates a web server.
 */
var http = require("http");
var server = http.createServer();
server.on('request',function(req,res){
	res.end("Hell World");
});
server.listen(8000);
console.log("Server is listening");
