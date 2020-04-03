const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario' // Hace referencia al Model de usuario
  },
  creado: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
