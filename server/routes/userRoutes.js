const express = require("express");
const router = express.Router();
const upload = require("../controllers/uploadImageController");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.post('/profile/:uid', upload.single('photo'), userController.uploadPicture);
router.get("/profile/:uid", userController.getUserPicture);
router.get("/notVerified", userController.getNotVerifiedUsers);
router.put("/verify/:uid", userController.verifyUser);

router
    .route('/')
    .get(userController.getAllUsers);
router.post("/becomePerformer", userController.becomePerformer);
router.get("/getLoggedInUser/:token", userController.getLoggedInUser);

module.exports = router;