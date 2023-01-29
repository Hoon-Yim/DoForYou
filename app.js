const express = require("express");
const morgan = require("morgan"); // for logging purpose
const app = express();

// Middlewares
if (process.env.NODE_DEV == "development") {
    app.use(morgan("dev"));
}
app.use(express.json());

// Routes
const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// Exception Handler for uncaught errors
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server..`, 404));
});
// Global Exception Handler
app.use(globalErrorHandler);

module.exports = app;