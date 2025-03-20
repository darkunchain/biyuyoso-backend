// Importar el módulo express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db'); // Importar la función de conexión a BD
const userRoutes = require('./routes/route-user'); // Importar las rutas de usuarios
const cuentaRoutes = require('./routes/route-cuenta'); // Importar las rutas de cuentas

// Crear una instancia de express
const app = express();



// Definir el puerto en el que correrá el servidor
const PORT = process.env.PORT || 2800;


connectDB(); // Conectar a la base de datos

// rutas con controllers
app.use('/api', userRoutes); // /api/users
app.use('/api', cuentaRoutes); // /api/users

// Crear una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});



app.use(cors());
app.use(bodyParser.json());

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});