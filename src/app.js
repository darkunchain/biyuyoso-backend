// app.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/routeUser'); // Rutas de usuarios
const cuentaRoutes = require('./routes/routeCuentas'); // Rutas de cuentas
const authRoutes = require('./routes/routeAuth'); // Rutas de cuentas
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 2800;

// Conectar a la base de datos
connectDB();

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Configurar body-parser para analizar JSON
app.use(bodyParser.json());

// Usar las rutas bajo el prefijo /api
app.use('/api', userRoutes); // /api/users
app.use('/api', cuentaRoutes); // /api/cuentas
app.use('/auth', authRoutes);

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});