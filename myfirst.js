var http = require('http');
var dt = require('./datefile');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
  res.write(txt);
    res.write("The date and time is currently: " + dt.myDateTime());
    res.write("\n");
    res.end('Hello World!');
    console.log('Good Job!');
}).listen(8080);

//http://localhost:8080/date?year=2017&month=July
