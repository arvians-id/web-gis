const { check, validationResult } = require('express-validator');

const rules = [
    check('nama')
        .notEmpty().withMessage('The nama field cannot be empty')
        .trim()
        .escape(),
    check('luas')
        .notEmpty().withMessage('The luas field cannot be empty').bail()
        .isFloat().withMessage('The luas field invalid')
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
        .escape(),
];

const validateTodo = [
    rules,
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            req.flash('old', req.body);
            req.flash('error', errors.array());

            return res.redirect('/districts/create');
        }
        
        next()
    }
]

module.exports = validateTodo;