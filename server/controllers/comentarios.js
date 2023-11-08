const Comentario = require("../models/comentario");
const Usuario = require("../models/usuario");
const Publicacion = require("../models/publicacion");

const verComentarios = async (req, res) => {
  const comentarios = await Comentario.find();
  res.json(comentarios);
}

const crearComentario = async (req, res) => {
  const { autor, contenido, puntuacion, publicacion } = req.body;
  const comentario = new Comentario({ autor, contenido, puntuacion, publicacion });
  await Publicacion.findByIdAndUpdate(publicacion, {
    $push: { comentarios: comentario._id },
  });
  await Usuario.findByIdAndUpdate(autor, {
    $push: { comentarios: comentario._id },
  });
  await comentario.save();
  res.json({ status: "Comentario creado" });
};

const editarComentario = async (req, res) => {
  const { id } = req.params;
  const { contenido, puntuacion } = req.body;
  const comentario = await Comentario.findByIdAndUpdate(id, {
    contenido,
    puntuacion,
  });
  await comentario.save();
  res.json({ status: "Comentario actualizado" });
};

const borrarComentario = async (req, res) => {
  const { id } = req.params;
  const comentario = await Comentario.findByIdAndDelete(id);
  await Publicacion.findByIdAndUpdate(comentario.publicacion, {
    $pull: { comentarios: comentario._id },
  });
  await Usuario.findByIdAndUpdate(comentario.autor, {
    $pull: { comentarios: comentario._id },
  });

  await comentario.save();
  res.json({ status: "Comentario borrado" });
};

// hay un error 500 cuando se borra algun comentario reparar

module.exports = {
  verComentarios,
  crearComentario,
  editarComentario,
  borrarComentario,
};
