const express = require('express');
const cors = require('cors');
const { PORT } = require('./src/config/secret');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', transaction => {
        socket.join(transaction);
    })
});

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require('./src/routes'));

server.listen(PORT || 3333, () => {
    console.log('Server running on port ' + PORT)
});
