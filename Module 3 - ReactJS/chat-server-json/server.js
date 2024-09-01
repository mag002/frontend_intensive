// File: server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins for simplicity
        methods: ["GET", "POST"]
    }
});

app.use(cors());

let users = require('./users.json');
let messages = require('./messages.json');

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('login', (userId) => {
        const user = users.find(u => u.id === userId);
        if (user) {
            user.online = true;
            socket.user = user;
            io.emit('usersList', users.filter(u => u.online));
        }
    });

    socket.on('getUsers', () => {
        socket.emit('usersList', users.filter(u => u.online));
    });

    socket.on('getMessages', () => {
        socket.emit('messageList', messages);
    });

    socket.on('sendMessage', (message) => {
        messages.push(message);
        fs.writeFileSync('./messages.json', JSON.stringify(messages));
        io.emit('newMessage', message);
    });

    socket.on('disconnect', () => {
        if (socket.user) {
            console.log(`${socket.user.name} disconnected`);
            socket.user.online = false;
            io.emit('usersList', users.filter(u => u.online));
        }
    });
});

server.listen(4000, () => {
    console.log('Listening on *:4000');
});
