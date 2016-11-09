var express = require('express');
var router = express.Router();

var ctrlLugares = require('../controllers/lugares');
var ctrlOtros = require('../controllers/otros');

/* Locations pages */
router.get('/', ctrlLugares.inicioLista);
router.get('/sitio', ctrlLugares.infoSitio);
router.get('/sitio/calificacion/nueva', ctrlLugares.addCalificacion);

/* Other pages */
router.get('/nosotros', ctrlOtros.nosotros);


module.exports = router;
