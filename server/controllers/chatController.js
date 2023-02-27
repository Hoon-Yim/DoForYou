const catchAsync = require("../utils/catchAsync");

// const Message = require("../models/messageModel");
const Room = require("../models/roomModel");

exports.getAllChatRooms = catchAsync(async (req, res, next) => {
    const rooms = await Room.find();

    res.status(200).json({
        status: "success",
        results: rooms.length,
        rooms
    });
}); 

exports.createChatRoom = catchAsync(async (req, res, next) => {
    const room = await Room.create(req.body);
    console.log(room);

    res.status(201).json({
        status: "success",
        room
    });
});