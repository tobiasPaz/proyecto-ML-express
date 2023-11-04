const routerUsuarios = require("express").Router();
const {
  verUsuarios,
  verUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
} = require("../controllers/users");

routerUsuarios.route("/").get(verUsuarios).post(crearUsuario);

routerUsuarios
  .route("/:id")
  .get(verUsuario)
  .put(actualizarUsuario)
  .delete(borrarUsuario);

module.exports = routerUsuarios;
