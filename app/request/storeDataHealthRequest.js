const { check, validationResult } = require('express-validator');

const rules = [
    check('marker')
        .notEmpty().withMessage('The marker field cannot be empty').bail()
        .trim()
        .escape(),
    check('rumah_sakit')
        .notEmpty().withMessage('The rumah sakit field cannot be empty').bail()
        .isNumeric().withMessage('The rumah sakit field must number')
        .trim()
        .escape(),
    check('rumah_sakit_bersalin')
        .notEmpty().withMessage('The rumah sakit bersalin field cannot be empty').bail()
        .isNumeric().withMessage('The rumah sakit bersalin field must number')
        .trim()
        .escape(),
    check('poliklinik')
        .notEmpty().withMessage('The poliklinik field cannot be empty').bail()
        .isNumeric().withMessage('The poliklinik field must number')
        .trim()
        .escape(),
    check('latitude')
        .notEmpty().withMessage('The latitude field cannot be empty').bail()
        .isFloat().withMessage('The latitude field invalid')
        .trim()
        .escape(),
    check('longitude')
        .notEmpty().withMessage('The longitude field cannot be empty').bail()
        .isFloat().withMessage('The longitude field invalid')
        .trim()
        .escape()
];

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('old', req.body);
            req.flash('error', errors.array());

            res.redirect('/data-healths/create');
        }
        
        next()
    }
]

module.exports = validateTodo;