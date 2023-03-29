const ReviewCustomer = require("../models/reviewCustomerModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Submit a new review
exports.submitCutomerReview = catchAsync(async (req, res) => {

    const { customerId, likes, tag } = req.body;
    const review = new ReviewCustomer({
        customerId,
        likes,
        tag
    });
    await review.save();
    res.status(201).json({
        status: "success",
        results: review.length,
        review
    });

});

// Get all reviews for a specific customer
exports.getCustomerReviews = catchAsync(async (req, res) => {
    const customerId = req.params.cid;
    const reviews = await ReviewCustomer.find({ customerId })
    res.status(201).json({
        status: "success",
        results: reviews.length,
        reviews
    });

});

// Get count of reviews for a specific customer and tag
exports.getCountForEachTag = catchAsync(async (req, res) => {
    const customerId = req.params.cid;
    const tag = req.params.tag;
    const reviews = await ReviewCustomer.find({ customerId: customerId, tag: tag });

    const count = reviews.length
  
    res.status(201).json({
      status: "success",
      results: reviews.length,
      count
    });
  });
  
  // Update likes count
  exports.updateCustomerRating = catchAsync(async (req, res) => {
    const customerId = req.params.cid;
    const like = req.params.like.toLowerCase() === 'like' ? 1 : -1;
  
    await ReviewCustomer.updateMany({ customerId: customerId }, { $inc: { likes: like } });
  
    res.status(200).json({
      status: "success",
      message: "Rating updated successfully"

    });
  });