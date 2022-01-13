const router = require('express').Router();
const dataHealthController = require('../app/controllers/data/dataHealthController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataHealthRequest');
const updateValidation = require('../app/request/updateDataHealthRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataHealthController.index);
    router.get('/create', isAuthenticated, dataHealthController.create);
    router.post('/', isAuthenticated, storeValidation, dataHealthController.store);
    router.get('/:id/edit', isAuthenticated, dataHealthController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataHealthController.update);
    router.delete('/:id', isAuthenticated, dataHealthController.destroy);

    app.use('/data-healths', router);
}