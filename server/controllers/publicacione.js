const Publicacion = require("../models/publicacion");
const Usuario = require("../models/usuario");
const Categoria = require("../models/categoria");

const verPublicaciones = async (req, res) => {
  const publicaciones = await Publicacion.find();
  res.json(publicaciones);
};

const verPublicacion = async (req, res) => {
  const { id } = req.params;
  const publicacion = await Publicacion.findById(id);
  res.json(publicacion);
};

const crearPublicacion = async (req, res) => {
  const { titulo, contenido, autor, categorias } = req.body;
  const publicacion = new Publicacion({ titulo, contenido, autor, categorias });
  await publicacion.save();
  await Usuario.findByIdAndUpdate(autor, {
    $push: { publicaciones: publicacion._id },
  });

  for (let i = 0; i < categorias.length; i++) {
    await Categoria.findByIdAndUpdate(publicacion._id, {
      $push: { publicaciones: publicacion._id },
    });
  }

  res.json({ status: "Publicacion creada" });
};

const borrarPublicacion = async (req, res) => {
  const { id } = req.params;
  const publicacion = await Publicacion.findByIdAndDelete(id);
  await Usuario.findByIdAndUpdate(publicacion.autor, {
    $pull: { publicaciones: publicacion._id },
  });
  await Categoria.updateMany(publicacion.categorias, {
    $pull: { publicaciones: publicacion._id },
  });

  res.json({ status: "Publicacion borrada" });
};

const actualizarPublicacion = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, autor, categorias } = req.body;
  const publicacion = await Publicacion.findByIdAndUpdate(id, {
    titulo,
    contenido,
    autor,
    categorias,
  });

  for (let i = 0; i < categorias.length; i++) {
    await Categoria.findByIdAndUpdate(publicacion._id, {
      $push: { publicaciones: publicacion._id },
    });

    await Categoria.findByIdAndUpdate(publicacion._id, {
      $pull: { publicaciones: publicacion._id },
    });
  }

  res.json({ status: "Publicacion actualizada" });
};

module.exports = {
  verPublicaciones,
  verPublicacion,
  crearPublicacion,
  borrarPublicacion,
  actualizarPublicacion,
};
