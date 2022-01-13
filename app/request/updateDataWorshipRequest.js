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
    check('gereja')
        .notEmpty().withMessage('The rumah gereja field cannot be empty').bail()
        .isNumeric().withMessage('The rumah gereja field must number')
        .trim()
        .escape(),
    check('pura')
        .notEmpty().withMessage('The pura field cannot be empty').bail()
        .isNumeric().withMessage('The pura field must number')
        .trim()
        .escape(),
    check('vihara')
        .notEmpty().withMessage('The vihara field cannot be empty').bail()
        .isNumeric().withMessage('The vihara field must number')
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

            res.redirect(`/data-worships/${req.params.id}/edit`);
        }
        
        next()
    }
]

module.exports = validateTodo;