const Usuario = require("../models/user");
const Comentario = require("../models/comment");

const verUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

const verUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  res.json(usuario);
};

const crearUsuario = async (req, res) => {
  const { nombreusuario, nombre, apellido, email, clave } = req.body;
  const usuario = new Usuario({
    nombreusuario,
    nombre,
    apellido,
    email,
    clave,
  });
  await usuario.save();
  res.json({ status: "Usuario creado" });
};

const borrarUsuario = async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  const publicaciones = await User.deleteMany({ autor: id }).exec();
  const comentarios = await Comment.deleteMany({ autor: id }).exec();
  res.json({ status: "Usuario borrado" });
};

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombreusuario, nombre, apellido, email, clave } = req.body;
  const usuario = await Usuario.findByIdandUpdate(id, {
    nombreusuario,
    nombre,
    apellido,
    email,
    clave,
  });
  
  res.json({ status: "Usuario actualizado" });
};

module.exports = {
  verUsuarios,
  verUsuario,
  crearUsuario,
  borrarUsuario,
  actualizarUsuario,
};
