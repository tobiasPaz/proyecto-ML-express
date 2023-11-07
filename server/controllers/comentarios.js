const Comentario = require("../models/comentario");
const Usuario = require("../models/usuario");
const Publicacion = require("../models/publicacion");

const crearComentario = async (req, res) => {
  const { autor, contenido, puntuacion } = req.body;
  const comentario = new Comentario({ autor, contenido, puntuacion });
  await Publicacion.findByIdAndUpdate(req.params.id, {
    $push: { comentarios: comentario._id },
  });
  await Usuario.findByIdAndUpdate(autor, {
    $push: { comentarios: comentario._id },
  });

  await comentario.save();
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
  await Publicacion.findByIdAndUpdate(req.params.id, {
    $pull: { comentarios: comentario._id },
  });
  await Usuario.findByIdAndUpdate(autor, {
    $pull: { comentarios: comentario._id },
  });

  await comentario.save();
  res.json({ status: "Comentario borrado" });
};

module.exports = {
  crearComentario,
  editarComentario,
  borrarComentario,
};
