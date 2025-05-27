const express = require('express');
const router = express.Router();

const {
  obtenerRecomendaciones,
  agregarInteraccion
} = require('../controllers/recomendacionesController');

router.get('/recomendaciones/:usuarioId', obtenerRecomendaciones);

router.post('/interaccion', agregarInteraccion);

module.exports = router;