const express = require('express');
const router = express.Router();

// Importar las funciones del controlador
const {
  obtenerRecomendaciones,
  agregarInteraccion
} = require('../controllers/recomendacionesController');

// GET: Obtener recomendaciones para un usuario
router.get('/recomendaciones/:usuarioId', obtenerRecomendaciones);

// POST: Registrar una interacción (usuario vio una película)
router.post('/interaccion', agregarInteraccion);

// Exportar las rutas
module.exports = router;