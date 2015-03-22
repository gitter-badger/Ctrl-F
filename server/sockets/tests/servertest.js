var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(6969);

app.get("/", function (req, res) {
  console.log('paul wuz here');
});

io.on('connection', function () {
  socket.emit('news', {'hello': 'world' });
  socket.on('my other even', function (data) {
    console.log(data);
  })
})
