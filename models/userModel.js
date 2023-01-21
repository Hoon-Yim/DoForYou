const mongoose = require("mongoose");
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
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    fisrtname: {
        type: String,
        required: [true, "First name is required"]
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"]
    },
    age: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: "Age cannot consist of letters or decimal point numbers"
        },
        required: [true, "Age is required"],
    },
    sex: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    phone: {
        type: String,

    },
    role: {
        type: String,
        lowercase: true,
        enum: ["customer", "performer"],
        default: "customer"
    },
    birthdate: Date
});

module.exports = mongoose.model("User", userSchema);