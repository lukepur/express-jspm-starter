/*
 *  Define the routes and bind controllers
 */
var express = require('express');
var router = express.Router();
var controllers = require('./route-controllers');

/* GET home page. */
router.get('/', controllers.index);

/* API */
router.get('/api/villains', controllers.api.villains.getVillains);

module.exports = router;


