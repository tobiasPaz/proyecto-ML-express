const routerPublicaciones = require("express").Router();
const {
  verPublicaciones,
  verPublicacion,
  crearPublicacion,
  borrarPublicacion,
  actualizarPublicacion,
} = require("../controllers/publicaciones");

const catchAsync = require("../utils/catchAsync");
const { validarPublicacion } = require("../validations/validaciones");

routerPublicaciones
  .route("/")
  .get(catchAsync(verPublicaciones))
  .post(validarPublicacion, catchAsync(crearPublicacion));

routerPublicaciones
  .route("/:id")
  .get(catchAsync(verPublicacion))
  .put(catchAsync(actualizarPublicacion))
  .delete(catchAsync(borrarPublicacion));

module.exports = routerPublicaciones;
