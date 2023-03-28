const socket = require("socket.io");

const messageController = require("../controllers/messageController");
const roomController = require("../controllers/roomController");

let chatInfo = {}

const joinRoom = socket => {
    socket.on("join_room", data => {
        socket.join(data.roomId);

        const [socketId, roomId] = socket.rooms;
        chatInfo[socketId] = {
            roomId,
            firstname: data.firstname
        }

        console.log(chatInfo);

        roomController.joinRoom(data.roomId, data.firstname);

        messageController
            .retrieveMessages(data.roomId)
            .then(messages => {
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

const handleDisconnection = socket => {
    socket.on("disconnect", () => {
        if (socket.id in chatInfo) {
            delete chatInfo[socket.id];
            console.log(socket.id, "disconnected");
            console.log(chatInfo);
        }
    });
}

exports.connection = socket => {
    joinRoom(socket);

    sendReceivedMessage(socket);

    handleDisconnection(socket);
}