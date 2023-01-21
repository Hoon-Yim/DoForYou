const express = require("express");
const morgan = require("morgan"); // for logging purpose
const app = express();

// Middlewares
if (process.env.NODE_DEV == "development") {
    app.use(morgan("dev"));
}
app.use(express.json());

// Routes

module.exports = app;