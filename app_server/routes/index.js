var express = require('express');
var router = express.Router();

var ctrlLugares = require('../controllers/lugares');
var ctrlOtros = require('../controllers/otros');

/* Locations pages */
router.get('/', ctrlLugares.inicioLista);
router.get('/lugar', ctrlLugares.infoLugar);
router.get('/lugar/notas/nueva', ctrlLugares.addNota);

/* Other pages */
router.get('/acercade', ctrlOtros.acercade);


module.exports = router;
