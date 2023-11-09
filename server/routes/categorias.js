const routeCategorias = require("express").Router();
const { model } = require("mongoose");
const {
  verCategorias,
  verCategoria,
  crearCategoria,
  borrarCategoria,
} = require("../controllers/categorias");

const { estaLogeado, esAdmin } = require("../middlewares");

const catchAsync = require("../utils/catchAsync");
const { validarCategoria } = require("../validations/validaciones");

routeCategorias
  .route("/")
  .get(catchAsync(verCategorias))
  .post(estaLogeado, esAdmin, validarCategoria, catchAsync(crearCategoria));

routeCategorias
  .route("/:id")
  .get(catchAsync(verCategoria))
  .put(estaLogeado, esAdmin, catchAsync(crearCategoria))
  .delete(estaLogeado, esAdmin, catchAsync(borrarCategoria));

module.exports = routeCategorias;
