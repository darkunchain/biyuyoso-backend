const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Verificar que se cargue correctamente

const connectDB = async () => {
  try {
    // Verifica que MONGODB_URI esté definida
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI no está definida en el archivo .env');
    }

    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
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