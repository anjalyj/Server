var u = require('./utility.js').u;
var http = require('http');

var functionList = Object.keys(u);

var callBack = function(request, response){
	console.log(request.url);
	console.log(request.connection.remoteAddress);
	var requestedFunction = request.url.substr(1);
	if(functionList.indexOf(requestedFunction) != -1){
		response.write(u[requestedFunction].toString());
	}
	else{
		response.write('Can Not Find The Requested Function.');
	};
	response.end();
};

var server = http.createServer(callBack);
server.listen(4040);