// models/modelCuenta.js
const mongoose = require('mongoose');

const cuentaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  saldo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Cuenta', cuentaSchema);