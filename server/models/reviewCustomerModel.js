const mongoose = require("mongoose");

const reviewCustomerSchema = mongoose.Schema({
    customerId: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    tag: {
        type: String,
        enum: [
            "Punctual payment",
            "Good manners",
            "Friendly",
            "Great Communication",
            "Reasonable request",
            "Positive",
            "Payment delay",
            "Lack of description",
            "Rude",
            "Poor Communication",
            "Unreasonable request",
            "Negative"
        ]
    }
});

module.exports = mongoose.model("ReviewCustomer", reviewCustomerSchema);