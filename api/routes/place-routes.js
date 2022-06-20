const { Router } = require('express');
const controller = require('../controllers/place-controller');

const routes = Router();

routes.get('/categories', controller.getCategories);
routes.get('/categories/batches', controller.getBatches);
routes.get('/categories/:category/batches', controller.getCategoryBatches);
routes.get('/categories/batches/dates', controller.getDates);
routes.get('/categories/batches/:batch/dates', controller.getBatchDates);
routes.get('/categories/batches/dates/:date/places', controller.getDatePlaces);
routes.get('/categories/batches/dates/places', controller.getPlaces);

routes.get('/places/:id', controller.getPlace)

module.exports = routes;