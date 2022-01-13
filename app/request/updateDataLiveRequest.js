const { check, validationResult } = require('express-validator');

const rules = [
    check('marker')
        .notEmpty().withMessage('The marker field cannot be empty').bail()
        .trim()
        .escape(),
    check('lahir')
        .notEmpty().withMessage('The lahir field cannot be empty').bail()
        .isNumeric().withMessage('The lahir field must number')
        .trim()
        .escape(),
    check('mati')
        .notEmpty().withMessage('The mati field cannot be empty').bail()
        .isNumeric().withMessage('The mati field must number')
        .trim()
        .escape(),
    check('datang')
        .notEmpty().withMessage('The datang field cannot be empty').bail()
        .isNumeric().withMessage('The datang field must number')
        .trim()
        .escape(),
    check('pindah')
        .notEmpty().withMessage('The pindah field cannot be empty').bail()
        .isNumeric().withMessage('The pindah field must number')
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

            res.redirect(`/data-lives/${req.params.id}/edit`);
        }
        
        next()
    }
]

module.exports = validateTodo;