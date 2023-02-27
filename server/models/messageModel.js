const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "A message must belong to a user"]
    },
});

module.exports = mongoose.model("Message", messageSchema);