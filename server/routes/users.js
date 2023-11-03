const routerUsuarios = require("express").Router();

routerUsuarios
  .route("/")
  .get((req, res) => {
    verUsuarios;
  })
  .post((req, res) => {
    crearUsuario;
  })
  .delete((req, res) => {
    borrarUsuario;
  });

routerUsuarios
  .route("/:id")
  .get((req, res) => {
    verUsuario;
  })
  .put((req, res) => {
    actualizarUsuario;
  })
  .delete((req, res) => {
    borrarUsuario;
  });

module.exports = routerUsuarios;
