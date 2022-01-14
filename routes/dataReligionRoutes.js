const router = require('express').Router();
const dataReligionController = require('../app/controllers/data/dataReligionController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataReligionRequest');
const updateValidation = require('../app/request/updateDataReligionRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataReligionController.index);
    router.get('/create', isAuthenticated, dataReligionController.create);
    router.post('/', isAuthenticated, storeValidation, dataReligionController.store);
    router.post('/download', isAuthenticated, dataReligionController.download);
    router.get('/statistic', isAuthenticated, dataReligionController.statistic);
    router.get('/:id/edit', isAuthenticated, dataReligionController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataReligionController.update);
    router.delete('/:id', isAuthenticated, dataReligionController.destroy);

    app.use('/data-religions', router);
}