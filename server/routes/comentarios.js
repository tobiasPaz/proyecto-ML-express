const routerComentarios = require("express").Router();
const {
  crearComentario,
  editarComentario,
  borrarComentario,
} = require("../controllers/comentarios");

const catchAsync = require("../utils/catchAsync");
const { validarComentario } = require("../validations/validaciones");

routerComentarios
  .route("/")
  .post(validarComentario, catchAsync(crearComentario));
routerComentarios
  .route("/:id")
  .put(catchAsync(editarComentario))
  .delete(catchAsync(borrarComentario));

module.exports = routerComentarios;
