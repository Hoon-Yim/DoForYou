const multer = require('multer');

// Check file type
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, '../client/public/files');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];

    cb(null,`${file.originalname}.${ext}`);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;