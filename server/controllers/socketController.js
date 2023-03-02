const socket = require("socket.io");

const messageController = require("../controllers/messageController");

const joinRoom = socket => {
    socket.on("join_room", roomId => {
        socket.join(roomId);
        
        messageController
            .retrieveMessages(roomId)
            .then(messages => {
            console.log(messages)
            socket.emit("send_previous_messages", messages);
            });
    });
}

const receiveMessage = socket => {
    socket.emit("connect_server", `${socket.id} has been connected`);
}

const sendReceivedMessage = socket => {
    socket.on("send_message", data => {
        messageController.insertMessageIntoDB(data);

        socket.in(data.roomId).emit("retrieve_message", `${data.firstname}: ${data.message}`);
    });
}

exports.connection = socket => {
    joinRoom(socket);

    sendReceivedMessage(socket);
}