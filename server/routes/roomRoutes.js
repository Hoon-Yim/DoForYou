const express = require("express");
const router = express.Router();

const roomController = require("../controllers/roomController");

router
    .route('/')
    .get(roomController.getAllRooms)
    .post(roomController.createRoom);

router.get("/:firstname", roomController.getUnreadNotification);

module.exports = router;