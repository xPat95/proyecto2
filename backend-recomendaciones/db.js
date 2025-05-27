const neo4j = require('neo4j-driver');

// Conexión a la base de datos
const driver = neo4j.driver(
  'bolt://localhost:7687',               // Dirección del servidor de Neo4j
  neo4j.auth.basic('neo4j', 'tu_contraseña')  // Reemplaza con tu usuario y contraseña reales
);

module.exports = driver;