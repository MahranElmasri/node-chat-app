const path = require("path");
const http=require('http');
const publicPath = path.join(__dirname , "../public");
const express=require('express');
const app=express();
const socketIO=require('socket.io')
const port=process.env.PORT||3000;
var server=http.createServer(app);
var io=socketIO(server)
const {generateMessage} =require('./utils/message')

app.use(express.static(publicPath))

io.on('connection',(socket)=>{
    console.log('New user connected')
socket.on('createMessage',(message)=>{
    console.log('createMessage',message);

//    io.emit('newMessage',{
//        from:message.from,
//        text:message.text,
//        createAt:new Date().getTime()
//    })
    // socket.broadcast.emit('newMessage',{
    //     from:message.from,
    //     text:message.text,
    //     createAt:new Date().getTime()
    // })
})

socket.emit('newMessage',generateMessage('Adnin','welcome to chat app'))
socket.broadcast.emit('newMessage',generateMessage('admin','new user joined'))


    socket.on('disconnect',()=>{
        console.log('client disconnected')
    })
})




server.listen(port,()=>{
    console.log(`Server started on port ${port}`)})
