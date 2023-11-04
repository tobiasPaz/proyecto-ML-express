const routerComentarios = require("express").Router();
const {
  crearComentario,
  editarComentario,
  borrarComentario,
} = require("../controllers/comments");

routerComentarios.route("/").post(crearComentario);
routerComentarios.route("/:id").put(editarComentario).delete(borrarComentario);
