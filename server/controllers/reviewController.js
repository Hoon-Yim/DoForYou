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


// Create Customer review
exports.createCustomerReview = catchAsync(async (req, res) => {
    const userId = req.params.uid

    const { like, tag } = req.body

    const review = await ReviewCustomer.create({
        customerId: userId,
        like,
        tag
    });

    res.status(201).json({
        status: "success",
        results: review.length,
        review
    });
})


// Create Customer review
exports.createPerformerReview = catchAsync(async (req, res) => {
    const userId = req.params.uid

    const { rating, review } = req.body

    const performerReview = await ReviewPerformer.create({
        customerId: userId,
        rating,
        review
    });

    res.status(201).json({
        status: "success",
        results: performerReview.length,
        performerReview
    });
})

