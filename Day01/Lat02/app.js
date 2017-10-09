var http = require('http');
//untuk hiden query string
var url = require('url');
//module file stream
var fs = require('fs');


http.createServer(function (req, s) {
    if (req.url != "/favicon.ico") {
        var akses = url.parse(req.url);
        //var extName = 
        if (akses.pathname == "/") {
            res.writeHead(200,{"Content-Type":"text/html"});
            file = "./Lat02/template/index.html";
            fs.createReadStream(file).pipe(res);

           
        }
        res.end();
    }



}).listen(8877);

console.log("Server is running .... ");