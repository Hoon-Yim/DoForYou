const express = require("express");
const router = express.Router();

const reviewCustomerController = require("../controllers/reviewCustomerController")
const reviewPerformerController = require("../controllers/reviewPerformerController")


// Customer reviews routes
router.post("/reviewCustomer/", reviewCustomerController.submitCutomerReview);
router.get("/reviewCustomer/:cid", reviewCustomerController.getCustomerReviews);
router.get("/reviewCustomer/:cid/:tag", reviewCustomerController.getCountForEachTag);
router.put("/reviewCustomer/:cid/:like", reviewCustomerController.updateCustomerRating);
module.exports = router;