const { check, validationResult } = require('express-validator');

const rules = [
    check('marker')
        .notEmpty().withMessage('The marker field cannot be empty').bail()
        .trim()
        .escape(),
    check('pns')
        .notEmpty().withMessage('The pns field cannot be empty').bail()
        .isNumeric().withMessage('The pns field must number')
        .trim()
        .escape(),
    check('bumn')
        .notEmpty().withMessage('The bumn field cannot be empty').bail()
        .isNumeric().withMessage('The bumn field must number')
        .trim()
        .escape(),
    check('tni')
        .notEmpty().withMessage('The tni field cannot be empty').bail()
        .isNumeric().withMessage('The tni field must number')
        .trim()
        .escape(),
    check('polisi')
        .notEmpty().withMessage('The polisi field cannot be empty').bail()
        .isNumeric().withMessage('The polisi field must number')
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

            res.redirect('/data-livelihoods/create');
        }
        
        next()
    }
]

module.exports = validateTodo;