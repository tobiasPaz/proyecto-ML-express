const routerUsuarios = require("express").Router();
const {
  verUsuarios,
  verUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
} = require("../controllers/usuarios");

const catchAsync = require("../utils/catchAsync");
const { validarUsuario } = require("../validations/validaciones");

routerUsuarios
  .route("/")
  .get(catchAsync(verUsuarios))
  .post(validarUsuario, catchAsync(crearUsuario));

routerUsuarios
  .route("/:id")
  .get(catchAsync(verUsuario))
  .put(catchAsync(actualizarUsuario))
  .delete(catchAsync(borrarUsuario));

module.exports = routerUsuarios;
