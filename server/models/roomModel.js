const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Chat Room"
    },
    participants: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastContactAt: {
        type: Date
    }
});

module.exports = mongoose.model("Room", roomSchema);