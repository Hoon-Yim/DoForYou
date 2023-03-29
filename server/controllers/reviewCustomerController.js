const ReviewCustomer = require("../models/reviewCustomerModel");
const ReviewPerformer = require("../models/reviewPerformerModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Submit a new review
app.post('/reviews', async (req, res) => {
    try {
      const { customerId, rating, categories } = req.body;
      const review = new Review({
        customerId,
        rating,
        categories
      });
      await review.save();
      res.status(201).json(review);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

