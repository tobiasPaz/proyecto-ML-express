const Comment = require("../models/comment");
const Usuario = require("../models/user");
const Publicacion = require("../models/post");

const crearComentario = async (req, res) => {
  const { autor, contenido, puntuacion } = req.body;
  const comment = new Comment({ autor, contenido, puntuacion });
  await Publicacion.findByIdAndUpdate(req.params.id, {
    $push: { comentarios: comment._id },
  });
  await Usuario.findByIdAndUpdate(autor, {
    $push: { comentarios: comment._id },
  });

  await comment.save();
};

const editarComentario = async (req, res) => {
  const { id } = req.params;
  const { contenido, puntuacion } = req.body;
  const comment = await Comment.findByIdAndUpdate(id, {
    contenido,
    puntuacion,
  });
  await comment.save();
  res.json({ status: "Comentario actualizado" });
};

const borrarComentario = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findByIdAndDelete(id);
  await Publicacion.findByIdAndUpdate(req.params.id, {
    $pull: { comentarios: comment._id },
  });
  await Usuario.findByIdAndUpdate(autor, {
    $pull: { comentarios: comment._id },
  });

  await comment.save();
  res.json({ status: "Comentario borrado" });
};

module.exports = {
  crearComentario,
  editarComentario,
  borrarComentario,
};
