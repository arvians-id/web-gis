const router = require('express').Router();
const registerController = require('../app/controllers/auth/registerController');
const storeValidation = require('../app/request/storeUserRequest');
const { isNotAuthenticated } = require('../app/middleware');

module.exports = app => {
    router.get('/', registerController.index);
    router.post('/', storeValidation, registerController.register);
    
    app.use('/register', isNotAuthenticated, router);
}