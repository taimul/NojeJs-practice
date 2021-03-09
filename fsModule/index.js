var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res) {

    if(req.url="/"){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            let mydata = fs.reaFileSync('Home.html');          //Synchronous, (no callback)
=======
        fs.readFile('Home.html',function (error,data) {         //filepath,FileOption and callback Function
>>>>>>> 49b7993c8e2dbf4fd0bcf0245a2250a9b4a5895e
=======
        fs.readFile('Home.html',function (error,data) {         //filepath,FileOption and callback Function
>>>>>>> 49b7993c8e2dbf4fd0bcf0245a2250a9b4a5895e
=======
        fs.readFile('Home.html',function (error,data) {         //filepath,FileOption and callback Function
>>>>>>> 49b7993c8e2dbf4fd0bcf0245a2250a9b4a5895e
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(mydata);
            res.end();

    }
});
server.listen(4040);
console.log("Server Up and Running");
