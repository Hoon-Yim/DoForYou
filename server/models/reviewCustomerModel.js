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
                type: Number
            },
            countTag2: {
                type: Number
            },
            countTag3: {
                type: Number
            },
            countTag4: {
                type: Number
            },
            countTag5: {
                type: Number
            },
            countTag6: {
                type: Number
            }
        }
    },
    dislikes: {
        count: {
            type: Number
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
                type: Number
            },
            countTag2: {
                type: Number
            },
            countTag3: {
                type: Number
            },
            countTag4: {
                type: Number
            },
            countTag5: {
                type: Number
            },
            countTag6: {
                type: Number
            }
        }
    }
});

module.exports = mongoose.model("ReviewCustomer", reviewCustomerSchema);