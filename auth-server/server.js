// Client ID 12ac13fed23949dab248e3e7dc4b1414
// Client Secret 818cad6e3d464a00be41fb668b6c27c0

// Redirect URIs
// http://localhost:8888/callback

let http = require("http");

/* Create an HTTP server to handle responses */

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(8888);