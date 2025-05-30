//Importar dependencias
const express = require('express'); //Framework para crear servidor HTTP.
const cors = require('cors'); //Habilita intercambio de recursos entre dominios diferentes.
const bodyParser = require('body-parser'); //Parser para procesar datos en el codigo a peticion HTTP en formato JSON.
const driver = require('./db'); //Archivo externo que contiene la configuración de la base de datos en Neo4j.

require('dotenv').config(); //Cargar variables del entorno (.env).

//Configurar servidor
const app = express(); //Instancia de la aplicacion de Express.
const PORT = 3000; //Puerto en el que se ejecutará la aplicacion.

//Middlewares
app.use(cors()); //Para solicitar desde otros dominios
app.use(express.static('public')); //Sirve archivos estaticos desde la carpeta de public.
app.use(bodyParser.json()); //Lee datos de JSON en las peticiones POST.

//Ruta del Post

//Recibe un JSON con nombre(usuario), pelicula y genero.
app.post('/registro-completo', async (req, res) => {
  const session = driver.session();
  const { nombre, pelicula, genero } = req.body;

  //comandos de cypher para crear nodos de usuario, pelicula, genero y crear relaciones de "vio" o "prefiere".
  try {
    await session.run(`
      MERGE (u:Usuario {nombre: $nombre})
      MERGE (p:Pelicula {titulo: $pelicula})
      MERGE (g:Genero {nombre: $genero})
      MERGE (u)-[:VIO]->(p)
      MERGE (u)-[:PREFIERE]->(g)
    `, { nombre, pelicula, genero });
  
  //Retorna si se logra registrar o no, postetior cierra la sesion de base de datos.
    res.status(200).send("Usuario y relaciones registradas");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al registrar");
  } finally {
    await session.close();
  }
});

//Ruta del GET

//Recopila el nombre del usuario desde la URL.
app.get('/recomendar/:nombre', async (req, res) => {
  const session = driver.session();
  const nombre = req.params.nombre;

  //Encuentra los generos preferidos del usuario, busca peliculas con ese genero que no ha visto, y devuelve 5 recomendaciones.
  try {
    const result = await session.run(`
      MATCH (u:Usuario {nombre: $nombre})-[:PREFIERE]->(g:Genero)<-[:TIENE_GENERO]-(p:Pelicula)
      WHERE NOT (u)-[:VIO]->(p)
      RETURN DISTINCT p.titulo AS recomendacion
      LIMIT 5
    `, { nombre });
  
  //Devuelve las recomendaciones como JSON.
    const recomendaciones = result.records.map(r => r.get('recomendacion'));
    res.json(recomendaciones);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener recomendaciones");
  } finally {
    await session.close();
  }
});

//Inicializa el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
