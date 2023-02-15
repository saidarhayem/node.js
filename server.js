var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here.. 
    server.end ('<h1>Hello Node!!!!</h1>')

});

server.listen(3000); //3 - listen for any incoming requests

console.log('server at port 3000 is running in http://localhost:3000')