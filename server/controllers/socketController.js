const socket = require("socket.io");

const joinRoom = socket => {
    socket.on("join_room", roomId => {
        socket.join(roomId);
    });
}

const receiveMessage = socket => {
    socket.emit("connect_server", `${socket.id} has been connected`);
}

const sendReceivedMessage = socket => {
    socket.on("send_message", data => {
        console.log(socket.id, data);

        socket.in(data.roomId).emit("retrieve_message", `${data.firstname}: ${data.message}`);
    });
}

exports.connection = socket => {
    console.log(socket.id, "Connected");

    joinRoom(socket);

    sendReceivedMessage(socket);
}