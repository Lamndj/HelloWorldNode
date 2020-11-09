var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var message = "Hello world",
    response = [message].join("\n");
  res.end(response);
});
server.listen();
