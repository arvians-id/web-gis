const { check, validationResult } = require('express-validator');

const rules = [
    check('marker')
        .notEmpty().withMessage('The marker field cannot be empty').bail()
        .trim()
        .escape(),
    check('islam')
        .notEmpty().withMessage('The islam field cannot be empty').bail()
        .isNumeric().withMessage('The islam field must number')
        .trim()
        .escape(),
    check('budha')
        .notEmpty().withMessage('The budha field cannot be empty').bail()
        .isNumeric().withMessage('The budha field must number')
        .trim()
        .escape(),
    check('hindu')
        .notEmpty().withMessage('The hindu field cannot be empty').bail()
        .isNumeric().withMessage('The hindu field must number')
        .trim()
        .escape(),
    check('katolik')
        .notEmpty().withMessage('The katolik field cannot be empty').bail()
        .isNumeric().withMessage('The katolik field must number')
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

            res.redirect(`/data-religions/${req.params.id}/edit`);
        }
        
        next()
    }
]

module.exports = validateTodo;