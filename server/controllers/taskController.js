const Task = require("../models/taskModel");
const User = require("../models/userModel");
const Room = require("../models/roomModel");

const authController = require("./authController");

const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Display all tasks
exports.getAllTasks = catchAsync(async (req, res) => {
    // const queryString = req.query;
    // const tasks = await Task.find();

    const features = new APIFeatures(Task.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const tasks = await features.query;

    res.status(200).json({
        status: "success",
        results: tasks.length,
        tasks
    });
});

// Create new task
exports.createTask = catchAsync(async (req, res) => {
    const task = await Task.create(req.body);

    res.status(201).json({
        status: "success",
        results: task.length,
        task
    });
});

// Display task by id
exports.getTaskById = catchAsync(async (req, res) => {
    const taskId = req.params.tid
    const task = await Task.findOne({ _id: taskId }).populate("uploadedUser").populate("assignedUser");

    res.status(200).json({
        status: "success",
        results: task.length,
        task
    });
});

exports.assignPerformer = catchAsync(async (req, res) => {
    const userId = await authController.decodeToken(req.body.token);
    const user = await User.findById(userId);
    const room = await Room.findById(req.body.roomId);

    const performer = room.participants.filter(participant => {
        return !participant.user.equals(user._id);
    })

    const task = await Task.findByIdAndUpdate(room.task, {
        assignedUser: performer[0].user
    }, { new: true });

    res.status(201).json({
        status: "success",
        task
    });
});

exports.setTaskCompleted = catchAsync(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.taskId, {
        isCompleted: true
    }, { new: true });

    res.status(201).json({
        status: "success",
        task
    });
});

exports.getCreatedTasks = catchAsync(async (req, res) => {
    const user = await User.findById(req.params.userId);
    const createdTasks = await Task.find({ uploadedUser: user, isCompleted: false });
    const completedTasks = await Task.find({ uploadedUser: user, isCompleted: true })

    res.status(200).json({
        status: "success",
        createdTasks,
        completedTasks
    });
});