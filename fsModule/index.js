var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res) {

    if(req.url="/"){
            let mydata = fs.reaFileSync('Home.html');          //Synchronous, (no callback)
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(mydata);
            res.end();

    }
});
server.listen(4040);
console.log("Server Up and Running");