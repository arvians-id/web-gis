const { check, validationResult } = require('express-validator');

const rules = [
    check('marker')
        .notEmpty().withMessage('The marker field cannot be empty').bail()
        .trim()
        .escape(),
    check('sd')
        .notEmpty().withMessage('The sd field cannot be empty').bail()
        .isNumeric().withMessage('The sd field must number')
        .trim()
        .escape(),
    check('mi')
        .notEmpty().withMessage('The rumah mi field cannot be empty').bail()
        .isNumeric().withMessage('The rumah mi field must number')
        .trim()
        .escape(),
    check('smp')
        .notEmpty().withMessage('The smp field cannot be empty').bail()
        .isNumeric().withMessage('The smp field must number')
        .trim()
        .escape(),
    check('mts')
        .notEmpty().withMessage('The mts field cannot be empty').bail()
        .isNumeric().withMessage('The mts field must number')
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

            res.redirect('/data-schools/create');
        }
        
        next()
    }
]

module.exports = validateTodo;