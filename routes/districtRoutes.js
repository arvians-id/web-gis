const router = require('express').Router();
const districtController = require('../app/controllers/districtController');
const { isAuthenticated } = require('../app/middleware');
const storeValidation = require('../app/request/storeDistrictRequest');
const updateValidation = require('../app/request/updateDistrictRequest');

module.exports = app => {
    router.get('/', isAuthenticated, districtController.index);
    router.get('/create', isAuthenticated, districtController.create);
    router.post('/', isAuthenticated, storeValidation, districtController.store);
    router.get('/:id/edit', isAuthenticated, districtController.edit);
    router.post('/:id/active', isAuthenticated, districtController.active);
    router.put('/:id', isAuthenticated, updateValidation, districtController.update);
    router.delete('/:id', isAuthenticated, districtController.destroy);

    app.use('/districts', router);
}