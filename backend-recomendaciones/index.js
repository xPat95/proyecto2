const express = require('express');
const cors = require('cors');
const app = express();

const recomendacionesRoutes = require('./routes/recomendaciones');

app.use(cors());
app.use(express.json());

app.use('/api', recomendacionesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});