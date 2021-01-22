const express = require('express');
const app = express();
require('dotenv').config();

// criando servidor e socket.io
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
    console.log(`User ${socket.id} connected!`);
    socket.emit('welcome', {connected: true});

    
});

// configurando porta do servidor
httpServer.listen(process.env.PORT_SERVER || 3000, console.log('Server connected!'));