const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = mongoose.Schema({
    registeredAt: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Given email is in wrong format"]
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, "Password is required"]
    },
    firstname: {
        type: String,
        required: [true, "First name is required"]
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"]
    },
    // age: {
    //     type: Number,
    //     validate: {
    //         validator: Number.isInteger,
    //         message: "Age cannot consist of letters or decimal point numbers"
    //     },
    //     required: [true, "Age is required"],
    // },
    // sex: {
    //     type: String,
    //     enum: ["Male", "Female", "Other"]
    // },
    phone: {
        type: String,

    },
    role: {
        type: String,
        lowercase: true,
        enum: ["customer", "performer"],
        default: "customer", 
        required: [true, "Role is required"]
    },
    location: {
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
    // interesting categories as a performer
    categories: {
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
        ]
    },
    birthdate: Date
});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    // Encrypting password
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model("User", userSchema);