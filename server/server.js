'use-strict';

const path = require('path');
// express is actually using http in the background
// importing http is use to config express to work with socket.io
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// default port depend on enviroment port
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

//App setup
const app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World!')
// })

const server = http.createServer(app);
// configure the server to use socketIO
const io = socketIO(server);

// Serving static files in Express
app.use(express.static(publicPath));


// socket.io
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => console.log('user was disconnected'))

})








// app.listen() call the exact method as http.createServer()
server.listen(port, function() {
    console.log(`listening to request on port ${port}`);
});