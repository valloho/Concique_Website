const { Router } = require('express');
const controller = require('../controllers/bar-controller');

const routesBar = Router();

routesBar.get('/dates', controller.getDates);
routesBar.get('/dates/:dateNumber/places', controller.getDatePlaces);
routesBar.get('/places/:id', controller.getPlace)
routesBar.get('/clubOfTheWeek', controller.getClubOfTheWeek);

routesBar.post('/dates/:dateNumber/places', controller.createPlace);
routesBar.put('/places/:id', controller.updatePlace)
routesBar.delete('/places/:id', controller.deletePlace)

module.exports = routesBar;