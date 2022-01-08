const { check, validationResult } = require('express-validator');
const { upload, multer } = require('../../config/multer');
const fs = require('fs');

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

const validateTodo = [
    (req, res, next) => {
        upload.single('geojson')(req, res, function (err) {
            let error = null
            if (err instanceof multer.MulterError) {
                error = err.message
            } else if (err) {
                error = err.message
            }

            res.locals.fileError = error || null;

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