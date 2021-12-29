const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(8080,()=>{
    console.log("Sunucu Calisiyor");
})

app.use(express.static('public'));

const io = socket(server);

io.on('connection',(socket)=>{
    console.log(socket.id)

    socket.on('chat',data =>{
        
        io.sockets.emit('chat',data);  //Broadcast veri gönderiyor chat ile
    })
})



