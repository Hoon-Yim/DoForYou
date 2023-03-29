const express = require("express");
const router = express.Router();

const reviewCustomerController = require("../controllers/reviewCustomerController")
const reviewPerformerController = require("../controllers/reviewPerformerController")


// Customer reviews routes
router.post("/reviewCustomer/:uid", reviewCustomerController.createCustomerReview);


// Performer reviews routes
router.post("/reviewPerformer/:uid", reviewPerformerController.createPerformerReview);


router
    .route('/')
    .get(reviewController.getPerformersReviews);

module.exports = router;