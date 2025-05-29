const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const driver = require('./db');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/registro-completo', async (req, res) => {
  const session = driver.session();
  const { nombre, pelicula, genero } = req.body;

  try {
    await session.run(`
      MERGE (u:Usuario {nombre: $nombre})
      MERGE (p:Pelicula {titulo: $pelicula})
      MERGE (g:Genero {nombre: $genero})
      MERGE (u)-[:VIO]->(p)
      MERGE (u)-[:PREFIERE]->(g)
    `, { nombre, pelicula, genero });

    res.status(200).send("Usuario y relaciones registradas");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al registrar");
  } finally {
    await session.close();
  }
});

app.get('/recomendar/:nombre', async (req, res) => {
  const session = driver.session();
  const nombre = req.params.nombre;

  try {
    const result = await session.run(`
      MATCH (u:Usuario {nombre: $nombre})-[:PREFIERE]->(g:Genero)<-[:TIENE_GENERO]-(p:Pelicula)
      WHERE NOT (u)-[:VIO]->(p)
      RETURN DISTINCT p.titulo AS recomendacion
      LIMIT 5
    `, { nombre });

    const recomendaciones = result.records.map(r => r.get('recomendacion'));
    res.json(recomendaciones);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener recomendaciones");
  } finally {
    await session.close();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});