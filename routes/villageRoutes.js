const router = require('express').Router();
const villageController = require('../app/controllers/villageController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeVillageRequest');
const updateValidation = require('../app/request/updateVillageRequest');

module.exports = app => {
    router.get('/', isAuthenticated, villageController.index);
    router.get('/create', isAuthenticated, villageController.create);
    router.post('/', isAuthenticated, storeValidation, villageController.store);
    router.get('/:id/edit', isAuthenticated, villageController.edit);
    router.put('/:id', isAuthenticated, updateValidation, villageController.update);
    router.delete('/:id', isAuthenticated, villageController.destroy);

    app.use('/villages', router);
}