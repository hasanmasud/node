var portnumber = 3000;
var http = require("http");
var server = http.createServer(function(req, res) {
	var bodyStr = "";

	// collecting the inputs
	req.on('data', function(chunk) {
		bodyStr += chunk.toString();
	});

	// this method is called when all the inputs are collected, lets create the
	// response
	req.on('end', function() {
		var output = "";
		var returnCode, contentType, contentLength, urlParse;

		urlParse = require('url');
		var url = urlParse.parse(req.url, true);
		var urlName = url.pathname;
		var argArray = urlName.split("/");
		var tableName = argArray[1];
		var recid = argArray[2];
		var outObject = restFunction(req.method, tableName, recid, bodyStr);
		output = JSON.stringify(outObject);

		console.log(output);

		// write the response header
		returnCode = 200;
		contentLength = Buffer.byteLength(output, 'utf8');
		contentType = "application/json";
		res.writeHead(returnCode, {
			'Connection' : 'close',
			'Content-Type' : contentType + "; charset=utf-8",
			'Content-Length' : contentLength
		});
		// sending the response
		res.end(output);
	});

}).listen(portnumber);

var restFunction = function(method, tablename, recordid, bodystr) {
	var insertObj, outObj;
	var db;
	outObj = {
		success : true
	};
	if (!tablename) {
		outObj.success = false;
		outObj.error = "rest error,table name is invalid";
		return outObj;
	} else if (method == 'POST' || method == 'PUT') {
		insertObj = JSON.stringify(bodystr);
	}
	if (!outObj.success) {
		return outObj;
	} else {
		var collections = [ "users" ];
		db = require('mongojs').connect("localhost:27017/myapp", collections);
		console.log("connection to datbase [localhost:27017/myapp] is successful");
	}
	switch (method) {
	case 'GET':
		if (recordid) {
			db.users.find({
				'user_id' : 329953
			}, function(err, users) {
				if (err) {
					outObj.success = false;
					outObj.error = "error in getting the records";
					return outObj;
				}
				console.log(users);
				return users;
			});
		} else {

		}
		break;
	case 'POST':
		break;
	case 'PUT':
		break;
	case 'DELETE':
		break;
	}
	return outObj;
};
console.log("server created , listening to port number 3000");