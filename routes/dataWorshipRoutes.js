const router = require('express').Router();
const dataWorshipController = require('../app/controllers/data/dataWorshipController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataWorshipRequest');
const updateValidation = require('../app/request/updateDataWorshipRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataWorshipController.index);
    router.get('/create', isAuthenticated, dataWorshipController.create);
    router.post('/', isAuthenticated, storeValidation, dataWorshipController.store);
    router.post('/download', isAuthenticated, dataWorshipController.download);
    router.get('/:id/edit', isAuthenticated, dataWorshipController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataWorshipController.update);
    router.delete('/:id', isAuthenticated, dataWorshipController.destroy);

    app.use('/data-worships', router);
}