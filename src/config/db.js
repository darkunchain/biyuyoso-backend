// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

const { MONGO_URI, MONGO_USER, MONGO_PASS } = process.env;

const connectDB = async () => {
  try {
    // Conectar a MongoDB usando la cadena de conexión del archivo .env
    await mongoose.connect(MONGO_URI, {
      user: MONGO_USER,
      pass: MONGO_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida');
  } catch (err) {
    console.error('Error conectando a MongoDB:', err.message);
    process.exit(1); // Detener la aplicación si no se puede conectar a la base de datos
  }
};

module.exports = connectDB;