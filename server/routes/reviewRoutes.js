const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController")

router.post("/reviewCustomer/:uid", reviewController.createCustomerReview);
router.post("/reviewPerformer/:uid", reviewController.createPerformerReview);
router.get("/:uid", reviewController.getUserReviews);

router
    .route('/')
    .get(reviewController.getPerformersReviews);

module.exports = router;