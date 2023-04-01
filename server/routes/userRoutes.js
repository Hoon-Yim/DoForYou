const express = require("express");
const router = express.Router();
const upload = require("../controllers/uploadImageController");
const uploadFile = require("../controllers/uploadFileController");

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.post('/profile/:uid', upload.single('photo'), userController.uploadPicture);
router.get("/profile/:uid", userController.getUserPicture);
router.post("/profile/uploadFile/:uid", uploadFile.single('file'), userController.uploadFile);
router.get("/profile/files/:uid", userController.getUserFiles);
router.put("/profile/files/:uid", userController.deleteAllFiles);

router
    .route('/')
    .get(userController.getAllUsers);
router.post("/becomePerformer", userController.becomePerformer);
router.get("/getUserRole/:userId", userController.getUserRole);

module.exports = router;