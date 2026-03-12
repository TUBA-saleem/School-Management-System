
const multer = require("multer");
const path = require("path");


//multer for storing ProfileImages
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./ProfileImages"));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });



//multer for storing TeacherImages
const teacher = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./TeacherImages"));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const teacherMulter = multer({ storage: teacher});

module.exports={upload,teacherMulter}