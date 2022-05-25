const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};
const filter = (req, file, callback) => {
  if (Object.getOwnPropertyNames(MIME_TYPES).includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Only .png, .jpg and .jpeg format allowed !"));
  }
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage, filter }).single("image");
