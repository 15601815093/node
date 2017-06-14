/**
 * Created by admin_gw on 2017/6/5.
 */
var http = require('http');
http
    .createServer(function(req, res){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('Hello Nodejs')
        res.end()
    })
    .listen(2017)