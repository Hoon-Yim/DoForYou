const express = require("express");
const router = express.Router();

const reviewsController = require("../controllers/reviewsController")


// Customer reviews routes
router.post("/reviewCustomer/", reviewsController.submitCutomerReview);
router.get("/reviewCustomer/:cid", reviewsController.getCustomerReviews);
router.get("/reviewCustomer/:cid/:tag", reviewsController.getCountForEachTag);
router.put("/reviewCustomer/:cid/:like", reviewsController.updateCustomerRating);




// Get both customer and performer reviews
router
    .route('/')
    .get(reviewsController.getAllReviews);

module.exports = router;