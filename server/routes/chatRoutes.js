const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");

router
    .route('/')
    .get(chatController.getAllChatRooms)
    .post(chatController.createChatRoom);

module.exports = router;