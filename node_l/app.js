var http = require('http');
var optFile = require('./write');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':"image/jpeg"});
    if(req.url != '/favicon.ico'){
        optFile.readImg('./img/pig.jpg',res);
    }
}).listen(8888)