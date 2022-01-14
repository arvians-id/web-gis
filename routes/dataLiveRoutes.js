const router = require('express').Router();
const dataLiveController = require('../app/controllers/data/dataLiveController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataLiveRequest');
const updateValidation = require('../app/request/updateDataLiveRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataLiveController.index);
    router.get('/create', isAuthenticated, dataLiveController.create);
    router.post('/', isAuthenticated, storeValidation, dataLiveController.store);
    router.post('/download', isAuthenticated, dataLiveController.download);
    router.get('/statistic', isAuthenticated, dataLiveController.statistic);
    router.get('/:id/edit', isAuthenticated, dataLiveController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataLiveController.update);
    router.delete('/:id', isAuthenticated, dataLiveController.destroy);

    app.use('/data-lives', router);
}