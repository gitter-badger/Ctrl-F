var app = require('express').createServer();
var io = require('socket.io')(app);
// var couch = require('cradle')

app.listen(6969);

app.get('/findgame', function (req, res) {
  res.sendfile('newgame.html');
});
