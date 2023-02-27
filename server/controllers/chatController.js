const socket = require("socket.io");

const receiveMessage = socket => {
    socket.emit("receive_message", `${socket.id} has been connected`);
}

const sendReceivedMessage = socket => {
    socket.on("message", data => {
        console.log(socket.id, data);

        socket.emit("message", `${data.firstname}: ${data.message}`);
        socket.broadcast.emit("message", `${data.firstname}: ${data.message}`);
    });
}

exports.connection = socket => {
    console.log(socket.id, "Connected");

    receiveMessage(socket);
    sendReceivedMessage(socket);
}