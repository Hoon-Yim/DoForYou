const mongoose = require("mongoose");

const reviewCustomerSchema = mongoose.Schema({
    customerId: {
        type: String
    },
    likes: {
        count: {
            type: Number,
            default: 0
        },
        tags: {
            selectedTag: {
                type: String,
                enum: [
                    "Punctual payment",
                    "Good manners",
                    "Friendly",
                    "Great Communication",
                    "Reasonable request",
                    "Positive"
                ]
            },
            countTag1: {
                type: Number,
                default: 0
            },
            countTag2: {
                type: Number,
                default: 0
            },
            countTag3: {
                type: Number,
                default: 0
            },
            countTag4: {
                type: Number,
                default: 0
            },
            countTag5: {
                type: Number,
                default: 0
            },
            countTag6: {
                type: Number,
                default: 0
            }
        }
    },
    dislikes: {
        count: {
            type: Number,
            default: 0
        },
        tags: {
            selectedTag: {
                type: String,
                enum: [
                    "Payment delay",
                    "Lack of description",
                    "Rude",
                    "Poor Communication",
                    "Unreasonable request",
                    "Negative"
                ]
            },
            countTag1: {
                type: Number,
                default: 0
            },
            countTag2: {
                type: Number,
                default: 0
            },
            countTag3: {
                type: Number,
                default: 0
            },
            countTag4: {
                type: Number,
                default: 0
            },
            countTag5: {
                type: Number,
                default: 0
            },
            countTag6: {
                type: Number,
                default: 0
            }
        }
    }
});

module.exports = mongoose.model("ReviewCustomer", reviewCustomerSchema);