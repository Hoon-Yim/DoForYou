const mongoose = require("mongoose");

const reviewPerformerSchema = mongoose.Schema({
    performerId: {
        type: String
    },
    rating: {
        type: Number,
        validate(value) {
            if (value < 0.0 && value > 5.0) {
                throw new Error("Rating can be only from 0 to 5")
            }
        }
    },
    review: {
        type: String
    }
});

module.exports = mongoose.model("ReviewPeformer", reviewPerformerSchema);