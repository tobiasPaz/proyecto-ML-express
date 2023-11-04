const routerPublicaciones = require("express").Router();
const {
  verPublicaciones,
  verPublicacion,
  crearPublicacion,
  borrarPublicacion,
  actualizarPublicacion,
} = require("../controllers/publicacione");

routerPublicaciones.route("/").get(verPublicaciones).post(crearPublicacion);

routerPublicaciones
  .route("/:id")
  .get(verPublicacion)
  .put(actualizarPublicacion)
  .delete(borrarPublicacion);
