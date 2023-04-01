const Admin = require("../models/adminModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


// Create new admin
exports.createAdmin = catchAsync(async (req, res) => {
    const admin = await Admin.create(req.body);

    res.status(201).json({
        status: "success",
        results: admin.length,
        admin
    });
});

// Login admin
exports.login = catchAsync(async (req, res) => {

    const admin = await Admin.findOne({ username: req.body.username, password: req.body.password })

    res.status(200).json({
        status: "success",
        results: admin.length,
        admin
    });
});