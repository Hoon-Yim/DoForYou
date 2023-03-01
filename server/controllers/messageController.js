const Message = require("../models/messageModel");
const User = require("../models/userModel");

exports.insertMessageIntoDB = async data => {
    const user = await User.findOne({ firstname: data.firstname });
    if (user === null) {
        return;
    }

    await Message.create({
        sender: user._id,
        room: data.roomId,
        message: data.message
    });
};