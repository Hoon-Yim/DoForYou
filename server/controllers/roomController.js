const catchAsync = require("../utils/catchAsync");

// const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

exports.getAllRooms = catchAsync(async (req, res, next) => {
    const rooms = await Room.find();

    res.status(200).json({
        status: "success",
        results: rooms.length,
        rooms
    });
}); 

exports.createRoom = catchAsync(async (req, res, next) => {
    const room = await Room.create(req.body);

    res.status(201).json({
        status: "success",
        room
    });
});

exports.getUnreadNotification = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ firstname: req.params.firstname });
    const rooms = await Room.find({ "participants.user": user._id });
    console.log(rooms);
    
    let count = 0;
    for (const room of rooms) {
        for (const participant of room.participants) {
            if (participant.user._id.equals(user._id)) {
                if (participant.disconnectedAt < room.lastContactAt) {
                    // console.log(room._id, user.firstname);
                    // console.log(new Date(participant.disconnectedAt).toISOString(), new Date(room.lastContactAt).toISOString());
                    count += 1;
                }
            }
        }
    }

    console.log(new Date(Date.now()).toISOString());

    res.status(200).json({
        status: "success",
        count
    });
});

exports.joinRoom = async (roomId, firstname) => {
    const user = await User.findOne({ firstname });
    const room = await Room.findById(roomId);

    if (room.isInParticipants(user) === false) {
        await Room.findByIdAndUpdate(room._id, {
            $push: { participants: { user } }
        });
    }
};

exports.exitRoom = async (roomId, firstname) => {
    const user = await User.findOne({ firstname });
    const room = await Room.findOneAndUpdate(
        { _id: roomId, "participants.user": user._id },
        { $set: { "participants.$.disconnectedAt": Date.now() }},
        { new: true });
}