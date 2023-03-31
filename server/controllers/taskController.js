const Task = require("../models/taskModel");

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
    const task = await Task.findOne({ _id: taskId })

    res.status(200).json({
        status: "success",
        results: task.length,
        task
    });
});