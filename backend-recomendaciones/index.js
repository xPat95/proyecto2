const express = require('express');
const cors = require('cors');
const app = express();

// Importar las rutas
const recomendacionesRoutes = require('./routes/recomendaciones');

// Middlewares
app.use(cors());              // Permite peticiones desde otros orígenes (frontend)
app.use(express.json());      // Permite leer JSON en los body de las peticiones

// Rutas principales
app.use('/api', recomendacionesRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});