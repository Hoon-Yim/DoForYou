const express = require("express");
const router = express.Router();

const reviewCustomerController = require("../controllers/reviewCustomerController")
const reviewPerformerController = require("../controllers/reviewPerformerController")


// Customer reviews routes
router.post("/reviewCustomer/", reviewCustomerController.submitCutomerReview);



module.exports = router;