const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        unique: true
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
            required: [true, "ZipCode is required"]
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
    categy: {
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
            "E-Transfer",
            "Wire Transfer",
            "Cash",
            "Credit Card",
            "PayPal"
        ],
        required: [true, "Payment method is required"]
    },
    details: {
        type: String,
        required: [true, "Please enter the details of task"]
    }
})

module.exports = mongoose.model("Task", taskSchema);