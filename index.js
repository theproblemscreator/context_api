const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const apiData = require('./public/api')
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use('/home', (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.send(`Welcome to the whole URL : ${fullUrl}`);
  next();
});

app.use(express.static('public')); // Serve static files from the 'public' folder

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Broadcast message to all users
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Notify when a user disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
