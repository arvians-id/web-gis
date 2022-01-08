const { check, validationResult } = require('express-validator');
const { upload, multer } = require('../../config/multer');

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
    check('geojson')
        .custom((value, { req }) => {
            if(typeof req.file == 'undefined')
                throw new Error('The geojson field invalid');
            
            return true
        })
];

const validateTodo = [
    (req, res, next) => {
        upload.single('geojson')(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log(err.message);
            } else if (err) {
                console.log(err.message);
            }
            
            next()
        })
    },
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('old', req.body);
            req.flash('error', errors.array());

            return res.redirect('/villages/create');
        }
        
        next()
    }
]

module.exports = validateTodo;