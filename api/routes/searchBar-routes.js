const { Router } = require('express');
const controller = require('../controllers/searchBar-controller');

const routesSearchBar = Router();

routesSearchBar.get('/events', controller.getEvents);

module.exports = routesSearchBar;