const express = require("express");
const router = express.Router();

const reviewsController = require("../controllers/reviewsController")


// Customer reviews routes
router.post("/reviewCustomer/", reviewsController.submitCutomerReview);
router.get("/reviewCustomer/:cid", reviewsController.getCustomerReviews);
router.get("/reviewCustomer/:cid/:tag", reviewsController.getCountForEachTag);
router.put("/reviewCustomer/:cid/:like", reviewsController.updateCustomerRating);

// Performer reviews routes


// Both customer and performer reviews
router.get("/:uid", reviewsController.getUserReviews);
router
    .route('/')
    .get(reviewsController.getAllReviews);

module.exports = router;