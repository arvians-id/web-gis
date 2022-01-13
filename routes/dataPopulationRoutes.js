const router = require('express').Router();
const dataPopoulationController = require('../app/controllers/data/dataPopoulationController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataPopulationRequest');
const updateValidation = require('../app/request/updateDataPopulationRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataPopoulationController.index);
    router.get('/create', isAuthenticated, dataPopoulationController.create);
    router.post('/', isAuthenticated, storeValidation, dataPopoulationController.store);
    router.post('/download', isAuthenticated, dataPopoulationController.download);
    router.get('/:id/edit', isAuthenticated, dataPopoulationController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataPopoulationController.update);
    router.delete('/:id', isAuthenticated, dataPopoulationController.destroy);

    app.use('/data-populations', router);
}