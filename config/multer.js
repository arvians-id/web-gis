const multer = require('multer');
const uuid = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'public/images');
    },
    filename: (req, file, done) => {
        done(null, uuid.v4() + path.extname(file.originalname));
    }
  });
  
const fileFilter = (req, file, done) => {
    const mimeType = ['.png', '.jpeg', '.jpg'];
    if(mimeType.includes(path.extname(file.originalname)))
        done(null, true);
    else
        done(new Error('The image filed must have the extension ' + mimeType.join(' ')), false);
}
  
const upload = multer({ storage, fileFilter, limits: { fileSize: 1000 * 1000 * 1 } });

module.exports = { upload, multer };