const routerUsuarios = require("express").Router();
const passport = require("passport");
const {
  verUsuarios,
  verUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
  loginUsuario,
  logoutUsuario,
  errorLogin,
  usuarioLogeado,
} = require("../controllers/usuarios");

const { estaLogeado, esAdmin, esUsuario } = require("../middlewares");

const catchAsync = require("../utils/catchAsync");
const {
  validarUsuario,
  validarEdtUsuario,
} = require("../validations/validaciones");

routerUsuarios
  .route("/")
  .get(catchAsync(verUsuarios))
  .post(validarUsuario, catchAsync(crearUsuario));

routerUsuarios.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/usuarios/error-login" }),
  catchAsync(loginUsuario)
);
routerUsuarios.get("/logout", catchAsync(logoutUsuario));
routerUsuarios.get("/usuario-logeado", catchAsync(usuarioLogeado));
routerUsuarios.post("/error-login", catchAsync(errorLogin));

routerUsuarios
  .route("/:id")
  .get(catchAsync(verUsuario))
  .put(estaLogeado, esUsuario, validarEdtUsuario, catchAsync(actualizarUsuario))
  .delete(estaLogeado, esAdmin, catchAsync(borrarUsuario));

module.exports = routerUsuarios;
