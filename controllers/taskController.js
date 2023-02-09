const Task = require("../models/taskModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllTasks = catchAsync(async (req, res) => {
    const tasks = await Task.find();

    res.status(500).json({
        status: "success",
        results: tasks.length,
        tasks
    });
})