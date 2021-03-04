var http=require('http');
var URL=require('url');


var server=http.createServer(function (req,res) {

    var myURL="http://taimul.com/blog.html?year=2021&month=march";

    var myURLObj= URL.parse(myURL,true);

    var myHostName=myURLObj.host;
    var myPathname=myURLObj.pathname;
    var mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(myHostName);
    res.end();

});

server.listen(5050);
console.log("Server Up and Running");