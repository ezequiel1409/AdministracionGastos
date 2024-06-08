require('dotenv').config();
const mysql = require('mysql2/promise');
const credentials = require('./credentials'); // Asegúrate de tener las credenciales correctas

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(credentials);
    return connection;
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err;
  }
}

module.exports = connectToDatabase;
