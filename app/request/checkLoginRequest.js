const { check, validationResult } = require('express-validator');

const rules = [
    check('username')
        .notEmpty().withMessage('The username field cannot be empty')
        .bail()
        .trim()
        .escape(),
    check('password')
        .notEmpty().withMessage('The password field cannot be empty')
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
            return res.redirect('/login');
        }
        next()
    }
]

module.exports = validateTodo;