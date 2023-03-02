const mongoose = require("mongoose");

const reviewCustomerSchema = mongoose.Schema({
    customer: {
        id: {
            type: String
        },
        firstname: {
            type: String
        },
        lastname: {
            type: String
        }
    },
    likes: {
        count: {
            type: Number,
        },
        tags:{
            type: String,
            enum: [
                "Punctual payment",
                "Good manners",
                "Friendly",
                "Great Communication",
                "Reasonable request",
                "Positive"
            ]
        }
    },
    dislikes: {
        count: {
            type: Number
        },
        tags:{
            type: String,
            enum: [
                "Payment delay",
                "Lack of description",
                "Rude",
                "Poor Communication",
                "Unreasonable request",
                "Negative"
            ]
        }
    }
});

module.exports = mongoose.model("ReviewCustomer", reviewCustomerSchema);