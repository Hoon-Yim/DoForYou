const ReviewCustomer = require("../models/reviewCustomerModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Submit a new review
exports.submitCutomerReview = catchAsync(async (req, res) => {

    const { customerId, rating, tag } = req.body;
    const review = new ReviewCustomer({
        customerId,
        rating,
        tag
    });
    await review.save();
    res.status(201).json({
        status: "success",
        results: review.length,
        review
    });
    
});

