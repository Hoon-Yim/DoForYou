const ReviewCustomer = require("../models/reviewCustomerModel");
const ReviewPerformer = require("../models/reviewPerformerModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Get all reviews 
exports.getAllReviews = catchAsync(async (req, res) => {

  const reviewsCustomer = await ReviewCustomer.find({});
  const reviewsPerformer = await ReviewPerformer.find({});

  res.status(200).json({
    status: "success",
    results: reviewsCustomer.length,
    reviewsCustomer,
    results: reviewsPerformer.length,
    reviewsPerformer
  });
})

// Displat all reviews for a specific user
exports.getUserReviews = catchAsync(async (req, res) => {

  const userId = req.params.uid;
  const reviewsCustomer = await ReviewCustomer.find({ userId });
  const reviewsPerformer = await ReviewPerformer.find({ userId });

  res.status(200).json({
    status: "success",
    results: reviewsCustomer.length,
    reviewsCustomer,
    results: reviewsPerformer.length,
    reviewsPerformer
  });
})


/***********************   CUSTOMER REVIEWS   ***************************/

// Submit a new review
exports.submitCutomerReview = catchAsync(async (req, res) => {
  const { customerId } = req.params.cid;
  const { likes, tag } = req.body;
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


/***********************   PERFORMER REVIEWS   ************************** */

// Submit a new review

exports.submitPerformerReview = catchAsync(async (req, res) => {
  
  const { pid: performerId } = req.params;
  const { customerId, rating, review } = req.body;
  // Find existing reviews for the performer
  const existingReviews = await ReviewPerformer.find({ performerId });

  // Calculate the new average rating
  const existingRatingsTotal = existingReviews.reduce((total, review) => total + review.rating, 0);
  const newAverageRating = ((existingRatingsTotal + rating) / (existingReviews.length + 1).toFixed(2));

  // Create a new review document
  const newReview = new ReviewPerformer({
    performerId,
    customerId,
    rating,
    review,
  });

  // Save the new review
  await newReview.save();

  // Update the performer with the new average rating
  const performer = await ReviewPerformer.findOneAndUpdate(
    { id: performerId },
    { $set: { averageRating: newAverageRating } },
    { new: true }
  );

  // Update the ratings in the existing reviews
  await ReviewPerformer.updateMany({ performerId }, { $set: { average_rating: newAverageRating } });

  res.status(201).json({ 
    status: "success",
    performer, 
    review: newReview 
  });
 
});


// Get all reviews for a specific performer
exports.getPerformerReviews = catchAsync(async (req, res) => {
  const performerId = req.params.pid;
  const reviews = await ReviewPerformer.find({ performerId })
  res.status(201).json({
    status: "success",
    results: reviews.length,
    reviews
  });
});

// Get average rating for a specific performer