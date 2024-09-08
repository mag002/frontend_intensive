const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allowing all origins for simplicity
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use('/avatars', express.static(path.join(__dirname, 'avatars')));

const USERS_FILE = './users.json';
const MESSAGES_FILE = './messages.json';

// Load initial data from JSON files
let users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
let messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));

const avatars = [
    '/avatars/avatar1.png',
    '/avatars/avatar2.png',
    '/avatars/avatar3.png',
    '/avatars/avatar4.png',
    '/avatars/avatar5.png',
    '/avatars/avatar6.png',
    '/avatars/avatar7.png',
    '/avatars/avatar8.png',
    '/avatars/avatar9.png',
];

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('login', ({ userName }) => {
        const userId = uuidv4();
        const avatar = avatars[Math.floor(Math.random() * avatars.length)];
        const newUser = {
            id: userId,
            name: userName,
            avatar: avatar,
            status: 'online'
        };

        users.push(newUser);
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2)); // Save to file
        socket.user = newUser;
        socket.emit('loginSuccess', newUser);
        io.emit('usersList', users);
    });

    socket.on('getUsers', () => {
        socket.emit('usersList', users.filter(u => u.id !== socket.user?.id));
    });

    socket.on('getMessages', ({ from, to }) => {
        const filteredMessages = messages.filter(msg => (msg.from === from && msg.to === to) || (msg.from === to && msg.to === from));
        socket.emit('messageList', filteredMessages);
    });
    // 17:52
    socket.on('sendMessage', ({ from, to, text }) => {
        console.log('message', { from, to, text })
        const newMessage = { from, to, text };
        messages.push(newMessage);
        fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2)); // Save to file
        io.emit('newMessage', newMessage);

        // New message sent => all user connect to socket will receive the whole chat history of them

        // New message sent => all user connect to socket will receive a new message

        // const filteredMessages = messages.filter(msg => (msg.from === from && msg.to === to) || (msg.from === to && msg.to === from));
        // io.emit('messageList', filteredMessages);

    });

    socket.on('disconnect', () => {
        if (socket.user) {
            console.log(`${socket.user.name} disconnected`);
            users = users.filter(u => u.id !== socket.user.id);
            fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2)); // Update file on disconnect
            io.emit('usersList', users);
        }
    });
});

server.listen(4000, () => {
    console.log('Listening on *:4000');
});
