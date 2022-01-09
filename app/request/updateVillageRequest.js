const { check, validationResult } = require('express-validator');
const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid');
const path = require('path');

// Multer
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'public/geojson');
    },
    filename: (req, file, done) => {
        done(null, uuid.v4() + path.extname(file.originalname));
    }
  });
  
const fileFilter = (req, file, done) => {
    const mimeType = ['.json'];
    if(mimeType.includes(path.extname(file.originalname)))
        done(null, true);
    else
        done(new Error('The file filed must have the extension ' + mimeType.join(' ')), false);
}
  
const upload = multer({ storage, fileFilter, limits: { fileSize: 1000 * 1000 * 1 } });

// Rules
const rules = [
    check('districtId')
        .notEmpty().withMessage('The kecamatan field cannot be empty')
        .trim()
        .escape(),
    check('nama')
        .notEmpty().withMessage('The nama field cannot be empty')
        .trim()
        .escape(),
    check('luas')
        .notEmpty().withMessage('The luas field cannot be empty').bail()
        .isFloat().withMessage('The luas field invalid')
        .trim()
        .escape(),
    check('warna')
        .notEmpty().withMessage('The warna field cannot be empty')
        .trim()
        .escape(),
];

// Middleware
const validateTodo = [
    (req, res, next) => {
        upload.single('geojson')(req, res, function (err) {
            let error = null
            if (err instanceof multer.MulterError) {
                error = err.message
            } else if (err) {
                error = err.message
            }

            res.locals.fileError = error;

            next()
        })
    },
    rules,
    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty() || res.locals.fileError != null){
            if(req.file){
                const path = req.file.path;
                fs.unlink(path, async (err) => {
                    if(err) {
                        console.log(err.message);
                    }
                })
            }

            const array = errors.array();

            if(res.locals.fileError){
                const file = {
                    msg: res.locals.fileError,
                    param: 'geojson',
                };
                array.push(file);
            }
            
            req.flash('old', req.body);
            req.flash('error', array);

            return res.redirect(`/villages/${req.params.id}/edit`);
        }
        
        next()
    }
]

module.exports = validateTodo;