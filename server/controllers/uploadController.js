const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Check file type
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/images/profile');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${req.params.uid}-${Date.now()}.${ext}`);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;