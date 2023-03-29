const ReviewCustomer = require("../models/reviewCustomerModel");
const ReviewPerformer = require("../models/reviewPerformerModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Review Customer routes

// Display reviews by user id 
exports.getUserReviews = catchAsync(async (req, res) => {
    const userId = req.params.uid
    const reviewsCustomer = await ReviewCustomer.find({ customer: { id: userId } });
    const reviewsPerformer = await ReviewPerformer.find({ performer: { id: userId } });

    res.status(200).json({
        status: "success",
        results: reviewsCustomer.length,
        reviewsCustomer,
        results: reviewsPerformer.length,
        reviewsPerformer
    });
})

// Display reviews for all performers 
// For the main page of the application where we display reviews
exports.getPerformersReviews = catchAsync(async (req, res) => {

    const reviewsPerformer = await ReviewPerformer.find();

    res.status(200).json({
        status: "success",
        results: reviewsPerformer.length,
        reviewsPerformer
    });
})
