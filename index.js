const express = require('express')
const http = require('http')
const { Server } = require('socket.io');
const { PORT } = require('./constants');
const cors = require('cors')


const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).send("This is my server and its reunning")
})

app.use('/api', require('./router/routers'))

io.on('connection', (socket) => {
    console.log('A user Conneted')
})

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
})