const { Router } = require('express');
const controller = require('../controllers/searchClub-controller');

const routesSearchClub = Router();

routesSearchClub.get('/clubEvents', controller.getEvents);
/*
routes.post('/club/events', controller.createPlace);
routes.put('/club/events/:id', controller.updatePlace)
routes.delete('/club/events/:id', controller.deletePlace)

 */

module.exports = routesSearchClub;