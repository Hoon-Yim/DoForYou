const Task = require("../models/taskModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Display all tasks
exports.getAllTasks = catchAsync(async (req, res) => {
    const tasks = await Task.find();

    res.status(500).json({
        status: "success",
        results: tasks.length,
        tasks
    });
})


// Create new task
exports.createTask = catchAsync(async (req, res) => {
    const task = new Task(req.body);
    await task.save();

    res.status(500).json({
        status: "success",
        results: task.length,
        task
    });
})

// Display task by id
exports.getTaskById = catchAsync(async (req, res) => {
    const taskId = req.params.tid
    const task = await Task.find({ _id: taskId })

    res.status(500).json({
        status: "success",
        results: task.length,
        task
    });
})