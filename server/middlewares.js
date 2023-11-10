const Comentario = require("./models/comentario");
const Usuario = require("./models/usuario");
const Categoria = require("./models/categoria");
const Publicacion = require("./models/publicacion");

const estaLogeado = async (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).json({ msg: "No estas logeado" });
  }
};

const esAutorPublicacion = async (req, res, next) => {
  const { id } = req.params;
  const publicacion = await Publicacion.findById(id);
  if (
    publicacion.autor.toString() === req.user._id.toString() ||
    req.user.admin
  ) {
    next();
  } else {
    res.status(403).json({ msg: "No eres autor de esta publicacion" });
  }
};

const esAutorComentario = async (req, res, next) => {
  const { id } = req.params;
  const comentario = await Comentario.findById(id);
  if (
    comentario.autor.toString() === req.user._id.toString() ||
    req.user.admin
  ) {
    next();
  } else {
    res.status(403).json({ msg: "No eres autor de este comentario" });
  }
};

const esAdmin = async (req, res, next) => {
  if (req.user.admin) {
    next();
  } else {
    res.status(403).json({ msg: "No eres administrador" });
  }
};

const esUsuario = async (req, res, next) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  if (usuario._id.toString() === req.user._id.toString() || req.user.admin) {
    next();
  } else {
    res.status(403).json({ msg: "No tienes permiso para hacer esto" });
  }
};

module.exports = {
  estaLogeado,
  esAutorPublicacion,
  esAutorComentario,
  esAdmin,
  esUsuario,
};
