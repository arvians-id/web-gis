const router = require('express').Router();
const dataSchoolController = require('../app/controllers/data/dataSchoolController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataSchoolRequest');
const updateValidation = require('../app/request/updateDataSchoolRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataSchoolController.index);
    router.get('/create', isAuthenticated, dataSchoolController.create);
    router.post('/', isAuthenticated, storeValidation, dataSchoolController.store);
    router.post('/download', isAuthenticated, dataSchoolController.download);
    router.get('/:id/edit', isAuthenticated, dataSchoolController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataSchoolController.update);
    router.delete('/:id', isAuthenticated, dataSchoolController.destroy);

    app.use('/data-schools', router);
}