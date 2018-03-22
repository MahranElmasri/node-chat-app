var socket = io();
        socket.on('connect', () => {
            console.log('connect to server')
        })
     
        socket.on('newMessage', function (message) {
            console.log('newMessage', message);
        });

           socket.on('disconnect', () => {
            console.log('Server disconnect')
        })