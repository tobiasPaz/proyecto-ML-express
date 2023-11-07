const routeCategorias = require("express").Router();
const { model } = require("mongoose");
const {
  verCategorias,
  verCategoria,
  crearCategoria,
  borrarCategoria,
} = require("../controllers/categorias");

const catchAsync = require("../utils/catchAsync");
const { validarCategoria } = require("../validations/validaciones");

routeCategorias
  .route("/")
  .get(catchAsync(verCategorias))
  .post(validarCategoria, catchAsync(crearCategoria));

routeCategorias
  .route("/:id")
  .get(catchAsync(verCategoria))
  .put(catchAsync(crearCategoria))
  .delete(catchAsync(borrarCategoria));

module.exports = routeCategorias;
