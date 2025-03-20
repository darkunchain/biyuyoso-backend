/// controllers/controllerAuth
const User = require('../models/modelUser');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail } = require('../config/nodemailer');

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const user = new User({ email, password });

    // Generar un token de verificación
    const verificationToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Guardar el token en el usuario
    user.verificationToken = verificationToken;
    await user.save();

    // Enviar correo de verificación
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: 'Usuario registrado. Por favor, verifica tu correo.' });
  } catch (err) {
    res.status(500).json({ message: 'Error en el servidor', error: err.message });
  }
};


const verifyEmail = async (req, res) => {
    const { token } = req.query;
  
    try {
      // Verificar el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(400).json({ message: 'Enlace de verificación inválido' });
      }
  
      // Marcar la cuenta como verificada
      user.isVerified = true;
      user.verificationToken = undefined; // Eliminar el token después de la verificación
      await user.save();
  
      res.status(200).json({ message: 'Cuenta verificada exitosamente' });
    } catch (err) {
      res.status(400).json({ message: 'Enlace de verificación inválido o expirado' });
    }
  };


  const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Buscar al usuario por correo
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }
  
      // Verificar si la cuenta está activa
      if (!user.isVerified) {
        return res.status(400).json({ message: 'Por favor, verifica tu correo electrónico' });
      }
  
      // Comparar contraseñas
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
      }
  
      // Generar un token JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Error en el servidor', error: err.message });
    }
  };
  
  
module.exports = { register, verifyEmail, login };