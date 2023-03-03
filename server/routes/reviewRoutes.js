const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController")

//router.post("/create", Controller.createTask);
//router.get("/:tid", taskController.getTaskById);

router
    .route('/')
    //.get(reviewController.getAllTasks);

module.exports = router;