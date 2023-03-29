const mongoose = require("mongoose");

const reviewPerformerSchema = mongoose.Schema({
    performerId: {
        type: String
    },
    customerId: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    average_rating: {
        type: Number,
        default: 0
    },
    review: {
        type: String
    }
});

module.exports = mongoose.model("ReviewPeformer", reviewPerformerSchema);