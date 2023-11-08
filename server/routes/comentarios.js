const routerComentarios = require("express").Router();
const {
  verComentarios,
  crearComentario,
  editarComentario,
  borrarComentario,
} = require("../controllers/comentarios");

const catchAsync = require("../utils/catchAsync");
const { validarComentario } = require("../validations/validaciones");

routerComentarios
  .route("/")
  .get(catchAsync(verComentarios))
  .post(validarComentario, catchAsync(crearComentario));
routerComentarios
  .route("/:id")
  .put(catchAsync(editarComentario))
  .delete(catchAsync(borrarComentario));

module.exports = routerComentarios;
