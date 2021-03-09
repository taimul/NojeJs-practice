var fs=require('fs');
var http=require('http');

var server = http.createServer(function (req,res) {

    if(req.url="/"){
        fs.readFile('Home.html',function (error,data) {         //filepath,FileOption and callback Function
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }
});
server.listen(4040);
console.log("Server Up and Running");
