const router = require('express').Router();
const loginController = require('../app/controllers/auth/loginController');
const checkLogin = require('../app/request/checkLoginRequest');
const { isNotAuthenticated } = require('../app/middleware');

module.exports = (app, passport) => {
    router.get('/', isNotAuthenticated, loginController.index);
    router.post('/', isNotAuthenticated, checkLogin,  passport.authenticate('local', { 
        successRedirect: '/', 
        failureRedirect: '/login', 
        failureFlash: true 
    }));
    router.delete('/logout', loginController.logout);
    
    app.use('/login', router);
}