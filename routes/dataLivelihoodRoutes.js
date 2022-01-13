const router = require('express').Router();
const dataLivelihoodController = require('../app/controllers/data/dataLivelihoodController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDataLivelihoodRequest');
const updateValidation = require('../app/request/updateDataLivelihoodRequest');

module.exports = app => {
    router.get('/', isAuthenticated, dataLivelihoodController.index);
    router.get('/create', isAuthenticated, dataLivelihoodController.create);
    router.post('/', isAuthenticated, storeValidation, dataLivelihoodController.store);
    router.get('/:id/edit', isAuthenticated, dataLivelihoodController.edit);
    router.put('/:id', isAuthenticated, updateValidation, dataLivelihoodController.update);
    router.delete('/:id', isAuthenticated, dataLivelihoodController.destroy);

    app.use('/data-livelihoods', router);
}