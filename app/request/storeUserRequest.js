const { check, validationResult } = require('express-validator');
const { user } = require('../../models');

const rules = [
    check('name')
        .notEmpty().withMessage('The name field cannot be empty')
        .trim()
        .escape(),
    check('username')
        .notEmpty().withMessage('The username field cannot be empty').bail()
        .custom(async (value) => {
            let userExist = await user.findOne({
                where: {
                    username: value
                }
            })
            if(userExist){
                throw new Error('The username field already taken');
            }

            return true;
        })
        .trim()
        .escape(),
    check('password')
        .notEmpty().withMessage('The password field cannot be empty').bail()
        .isLength({ min: 5 })
        .trim()
        .escape(),
    check('password_confirmation')
        .notEmpty().withMessage('The password confirmation field cannot be empty')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password does not match password');
            }
        
            return true;
        })
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

            return res.redirect('/register');
        }
        
        next()
    }
]

module.exports = validateTodo;