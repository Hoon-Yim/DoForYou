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

exports.getLoggedInUser = catchAsync(async(req, res) => {
    const userId = await authController.decodeToken(req.params.userId);
    const user = await User.findById(userId);

    res.status(200).json({
        status: "success",
        user
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
exports.getUserPicture = catchAsync(async (req, res, next) => {

      const userId = req.params.uid;
      const user = await User.findById(userId);
      if (!user || !user.img || !user.img.data) {
        return res.status(404).json({ error: 'User image not found' });
      }
      res.set('Content-Type', user.img.contentType);
      res.send(user.img.data);

  });


// Upload file  
exports.uploadFile = catchAsync(async (req, res, next) => {
    try {
      const userId = req.params.uid;
      const { buffer, mimetype, originalname, size } = req.file;
  
      const result = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            files: {
              file: {
                data: buffer,
                contentType: mimetype,
                originalName: originalname,
                fileSize: size,
              },
            },
          },
        },
        { new: true }
      );
  
      if (!result) {
        return res.status(404).send('User not found');
      }
  
      res.send('File updated');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });

  // Get user files
exports.getUserFiles = catchAsync(async (req, res, next) => {
    try {
      const userId = req.params.uid;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      const files = user.files;
  
      res.json(files);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
  
  
  exports.deleteAllFiles = catchAsync(async (req, res, next) => {
    try {
      const userId = req.params.uid;
      const result = await User.updateOne(
        { _id: userId },
        { $set: { files: [] } }
      );
      if (result.nModified === 0) {
        return res.status(404).send('User not found');
      }
      res.send('All files deleted');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });