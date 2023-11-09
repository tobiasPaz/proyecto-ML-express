const routerComentarios = require("express").Router();
const {
  verComentarios,
  crearComentario,
  editarComentario,
  borrarComentario,
} = require("../controllers/comentarios");

const { estaLogeado, esAutorComentario } = require("../middlewares");

const catchAsync = require("../utils/catchAsync");
const { validarComentario } = require("../validations/validaciones");

routerComentarios
  .route("/")
  .get(catchAsync(verComentarios))
  .post(estaLogeado, validarComentario, catchAsync(crearComentario));
routerComentarios
  .route("/:id")
  .put(estaLogeado, esAutorComentario, catchAsync(editarComentario))
  .delete(estaLogeado, esAutorComentario, catchAsync(borrarComentario));

module.exports = routerComentarios;
