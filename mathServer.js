var http = require('http');

var callBack = function(request, reponse){
	reponse.end('connected');
};

var server = http.createServer(callBack);
server.listen(1010);