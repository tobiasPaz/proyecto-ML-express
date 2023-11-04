const routeCategorias = require("express").Router();
const {
  verCategorias,
  verCategoria,
  crearCategoria,
  borrarCategoria,
} = require("../controllers/categorias");

routeCategorias.route("/").get(verCategorias).post(crearCategoria);

routeCategorias
  .route("/:id")
  .get(verCategoria)
  .put(crearCategoria)
  .delete(borrarCategoria);
