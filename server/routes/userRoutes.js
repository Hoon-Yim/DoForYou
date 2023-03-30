const express = require("express");
const router = express.Router();
const upload = require("../controllers/uploadController");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.post('/profile/:uid', upload.single('photo'), authController.uploadPicture);
router.get("/profile/:uid", authController.getUserPicture);
router.put("/profile/:uid", upload.single('photo'), authController.updateUserPicture);
router
    .route('/')
    .get(userController.getAllUsers);

module.exports = router;