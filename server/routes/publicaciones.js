const routerPublicaciones = require("express").Router();
const {
  verPublicaciones,
  verPublicacion,
  crearPublicacion,
  borrarPublicacion,
  actualizarPublicacion,
} = require("../controllers/publicaciones");

const { estaLogeado, esAutorPublicacion } = require("../middlewares");

const catchAsync = require("../utils/catchAsync");
const { validarPublicacion } = require("../validations/validaciones");

routerPublicaciones
  .route("/")
  .get(catchAsync(verPublicaciones))
  .post(estaLogeado, validarPublicacion, catchAsync(crearPublicacion));

routerPublicaciones
  .route("/:id")
  .get(catchAsync(verPublicacion))
  .put(estaLogeado, esAutorPublicacion, catchAsync(actualizarPublicacion))
  .delete(estaLogeado, esAutorPublicacion, catchAsync(borrarPublicacion));

module.exports = routerPublicaciones;
