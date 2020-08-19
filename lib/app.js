const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('./public'));
app.use(express.json());

// app.use('/api/v1/RESOURCE', require('./routes/RESOURCE'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

const allUris = [];

io.on('connection', socket => {
  socket.on('get uri', (uri) => {
    console.log(uri);
    
    allUris.push(uri);

    console.log(allUris);

    socket.emit('got uri', allUris);
  });
});

module.exports = server;
