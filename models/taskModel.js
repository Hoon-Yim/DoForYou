const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    category: {
        type: String,
        enum: [
            "Courier Service",
            "Repair of Digital Devices",
            "Design",
            "Event and Promotions",
            "Software Development",
            "Installation and Repair of Equipment",
            "Cargo Transportation",
            "Cleaning and Household Help",
            "Transport Repair",
            "Photo, Video and Audio",
            "Repair and Construction",
            "Computer Help",
            "Virtual Assistant",
            "Financial Advisor",
            "Beauty and Health",
            "Tutors and Training"
        ],
        required: [true, "Category is required"]
    },
    remote: {
        type: String,
        enum: [
            "Can be done remotely",
            "Need to be done in person"
        ],
        required: [true, "Option is required"]
    },
    address: {
        // GeoJSON
        type: {
            type: String,
            default: "Point",
            enum: ["Point"]
        },
        coordinates: [Number],
        zipcode: {
            type: String,
            required: [true, "Postal is required"]
        },
        address: {
            type: String,
            required: [true, "Address is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"]
        },
        province: {
            type: String,
            enum: [
                "Alberta",
                "British Colombia",
                "Manitoba",
                "New Brunswick",
                "Newfoundland",
                "Nova Scotia",
                "Ontario",
                "Prince Edward Island",
                "Quebec",
                "Saskatchewan"
            ],
            required: [true, "Province is required"]
        },
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        unique: true
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: [true, "Start date is required"]
    },
    endDate: {
        type: Date,
        default: Date.now(),
        required: [true, "End date is required"]
    },
    paymentMethod: {
        type: String,
        enum: [
            "Directly pay in person",
            "by Bank e-transfer"
        ],
        required: [true, "Payment method is required"]
    },
    details: {
        type: String,
        required: [true, "Please enter the details of task"]
    },
    budget: {
        type: Number,
        required: [true, "Amount is required"],
        validate(value) {
            if (value < 0.0) {
                throw new Error("Negative amount is not allowed")
            }
        }

    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        validate: {
            validator: function (num) {
                return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(num);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model("Task", taskSchema);