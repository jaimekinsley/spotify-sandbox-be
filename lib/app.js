const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('./public'));
app.use(express.json());

// app.use('/api/v1/RESOURCE', require('./routes/RESOURCE'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));



io.on('connection', socket => {
  socket.on('token', (_token) => {
    console.log(_token);
  });
});

module.exports = server;
