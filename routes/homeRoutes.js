const router = require('express').Router();
const homeController = require('../app/controllers/homeController');
const { isAuthenticated } = require('../app/middleware');

module.exports = app => {
    router.get('/', isAuthenticated, homeController.index);
    router.get('/map', isAuthenticated, homeController.map);
    
    app.use('/', router);
}