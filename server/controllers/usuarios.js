const Usuario = require("../models/usuario");
const Comentario = require("../models/comentario");
const Publicacion = require("../models/publicacion");

const verUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

const verUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id)
    .populate("publicaciones")
    .populate("comentarios");
  res.json(usuario);
};

const crearUsuario = async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const usuario = new Usuario({
    nombre,
    apellido,
    email,
    username: email,
  });
  const nuevoUsuario = await Usuario.register(usuario, password);

  req.login(nuevoUsuario, (err) => {
    if (err) {
      return next(err);
    }
  });

  res.json({ status: "Usuario creado", nuevoUsuario });
};

const borrarUsuario = async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  const publicaciones = await Publicacion.deleteMany({ autor: id }).exec();
  const comentarios = await Comentario.deleteMany({ autor: id }).exec();
  res.json({ status: "Usuario borrado" });
};

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email } = req.body;
  const usuario = await Usuario.findByIdAndUpdate(id, {
    nombreusuario: email,
    nombre,
    apellido,
    email,
  });

  res.json({ status: "Usuario actualizado" });
};

const loginUsuario = async (req, res) => {
  const { username } = req.body;
  const usuario = await Usuario.findOne({ username });
  res.json({ usuario });
};

const logoutUsuario = async (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.json({ status: "Usuario desconectado" });
};

const usuarioLogeado = async (req, res) => {
  if (req.user) {
    res.json({ logeado: true, user: req.user });
  } else {
    res.json({ logeado: false });
  }
};

const errorLogin = async (req, res) => {
  res.status(401).json({ status: "Error en los datos de login" });
};

module.exports = {
  verUsuarios,
  verUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
  loginUsuario,
  logoutUsuario,
  errorLogin,
  usuarioLogeado,
};
