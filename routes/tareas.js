const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crear una tarea
// api/tareas
router.post('/',
  auth,
  [
    check('nombre', 'El nombre de la tarea es obligatorio').not().isEmpty(),
    check('proyecto', 'El Proyecto es obligatorio').not().isEmpty()
  ],
  tareaController.crearTarea
);

// Obtener todas las tareas por proyecto
router.get('/',
  auth,
  tareaController.obtenerTareas
);

// Actualizar una tarea por proyecto
router.put('/:id',
  auth,
  tareaController.actualizarTarea
);

// Eliminar una tarea por proyecto
router.delete('/:id',
  auth,
  tareaController.eliminarTarea
);

module.exports = router;
