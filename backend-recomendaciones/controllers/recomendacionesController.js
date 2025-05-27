const driver = require('../db');

// Función para obtener recomendaciones para un usuario
const obtenerRecomendaciones = async (req, res) => {
  const usuarioId = req.params.usuarioId;
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (u:Usuario {id: $usuarioId})-[:VIO]->(p:Pelicula)<-[:VIO]-(otros:Usuario)-[:VIO]->(rec:Pelicula)
      WHERE NOT (u)-[:VIO]->(rec)
      RETURN DISTINCT rec.titulo AS titulo
      LIMIT 5
    `, { usuarioId });

    const recomendaciones = result.records.map(r => r.get('titulo'));
    res.json(recomendaciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await session.close();
  }
};

// Función para registrar una interacción
const agregarInteraccion = async (req, res) => {
  const { usuarioId, peliculaId, titulo } = req.body;
  const session = driver.session();

  try {
    await session.run(`
      MERGE (u:Usuario {id: $usuarioId})
      MERGE (p:Pelicula {id: $peliculaId})
      ON CREATE SET p.titulo = $titulo
      MERGE (u)-[:VIO]->(p)
    `, { usuarioId, peliculaId, titulo });

    res.status(200).json({ mensaje: 'Interacción registrada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await session.close();
  }
};

module.exports = {
  obtenerRecomendaciones,
  agregarInteraccion
};