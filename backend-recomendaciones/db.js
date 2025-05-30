//Importar dependencias
const neo4j = require('neo4j-driver'); //conexion para ejecutar consultas desde Node.js con la libreria oficial de Neo4j.
require('dotenv').config(); //Carga variables de entorno desde el archivo .env

//Configuracion Neo4j
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
);

module.exports = driver;
