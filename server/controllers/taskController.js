const Task = require("../models/taskModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Display all tasks
exports.getAllTasks = catchAsync(async (req, res) => {
    const tasks = await Task.find();

    res.status(200).json({
        status: "success",
        results: tasks.length,
        tasks
    });
})


// Create new task
exports.createTask = catchAsync(async (req, res) => {
    const task = await Task.create(req.body);

    res.status(201).json({
        status: "success",
        results: task.length,
        task
    });
})

// Display task by id
exports.getTaskById = catchAsync(async (req, res) => {
    const taskId = req.params.tid
    const task = await Task.find({ _id: taskId })

    res.status(200).json({
        status: "success",
        results: task.length,
        task
    });
})