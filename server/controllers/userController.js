const User = require("../models/userModel");
const path = require('path');
const fs = require('fs');
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const authController = require("./authController")

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        status: "success",
        results: users.length,
        users
    });
});

exports.becomePerformer = catchAsync(async(req, res) => {
	const userId = await authController.decodeToken(req.body.jwt);
    const object = {
        ...req.body.formObject,
        role: "performer"
    }

	const user = await User.findByIdAndUpdate(userId, object, { new: true });

	res.status(201).json({
		status: "success"
    });
});

exports.getUserRole = catchAsync(async(req, res) => {
    const userId = await authController.decodeToken(req.params.userId);
    const user = await User.findById(userId);

    res.status(200).json({
        status: "success",
        role: user.role
    });
});


exports.uploadPicture = catchAsync(async (req, res, next) => {

    // Update user document with the new profile picture URL
    const user = await User.findByIdAndUpdate(
        req.params.uid,
        {
            img: {
                data: fs.readFileSync(path.join(__dirname, '../../client/public/images/profile', req.file.filename)),
                contentType: 'image/png'
                
            }
        }   
    );
    res.status(200).json({
        status: 'success',
        user
    });
});

// Get profile picture
exports.getUserPicture = async (req, res) => {

      const userId = req.params.uid;
      const user = await User.findById(userId);
      if (!user || !user.img || !user.img.data) {
        return res.status(404).json({ error: 'User image not found' });
      }
      res.set('Content-Type', user.img.contentType);
      res.send(user.img.data);

  };
  

  
