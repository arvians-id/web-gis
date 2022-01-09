const { check, validationResult } = require('express-validator');

const rules = [
    check('marker')
        .notEmpty().withMessage('The marker field cannot be empty').bail()
        .trim()
        .escape(),
    check('laki_laki')
        .notEmpty().withMessage('The laki_laki field cannot be empty').bail()
        .isNumeric().withMessage('The laki_laki field must number')
        .trim()
        .escape(),
    check('perempuan')
        .notEmpty().withMessage('The perempuan field cannot be empty').bail()
        .isNumeric().withMessage('The perempuan field must number')
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

            res.redirect('/data-populations/create');
        }
        
        next()
    }
]

module.exports = validateTodo;