const Categoria = require("../models/categories");
const Publicacion = require("../models/post");

const verCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

const verCategoria = async (req, res) => {
  const { id } = req.params;
  const categoria = await Categoria.findById(id);
  res.json(categoria);
};

const crearCategoria = async (req, res) => {
  const { nombre } = req.body;
  const categoria = new Categoria({ nombre });
  await categoria.save();
  res.json({ status: "Categoria creada" });
};

const borrarCategoria = async (req, res) => {
  const { id } = req.params;
  await Categoria.findByIdAndDelete(id);
  const publicaciones = await Publicacion.findManyAndUpdate(
    { categoria: id },
    { categoria: null }
  );
  res.json({ status: "Categoria borrada" });
};

const actualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const categoria = await Categoria.findByIdandUpdate(id, { nombre });
  const publicaciones = await Publicacion.findManyAndUpdate(
    { categoria: id },
    { categoria: nombre }
  );
  res.json({ status: "Categoria actualizada" });
};

module.exports = {
  verCategorias,
  verCategoria,
  crearCategoria,
  borrarCategoria,
  actualizarCategoria,
};
