var u = require('./utility.js').u;
var http = require('http');
var fs = require('fs');

var functionList = Object.keys(u);

var callBack = function(request, response){
	var requestedFunction = request.url.substr(1);
	var today =  new Date();

	var data = "userData.push({ 'User_Address' : '"+request.connection.remoteAddress.toString()+"','Date_and_Time' : '"+today+"','Request' : '"+requestedFunction+"'});";
	
	fs.appendFile('./userData.js',data)
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