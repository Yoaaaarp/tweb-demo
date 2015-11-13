

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
var data = [0,0,0];
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

var server = app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
var io = require('socket.io')(server);

io.on('connection', function(socket){
  socket.emit('poll', data);

  socket.on('vote', function(indice){
    data[indice]++;
    console.log(indice + " " + data[indice]);
    io.emit('poll', data);
  })
});

