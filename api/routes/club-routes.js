const { Router } = require('express');
const controller = require('../controllers/club-controller');

const routes = Router();

routes.get('/dates', controller.getDates);
routes.get('/dates/:dateNumber/places', controller.getDatePlaces);
routes.get('/places/:id', controller.getPlace)
routes.get('/clubOfTheWeek', controller.getClubOfTheWeek);

routes.post('/dates/:dateNumber/places', controller.createPlace);
routes.put('/places/:id', controller.updatePlace)
routes.delete('/places/:id', controller.deletePlace)

module.exports = routes;