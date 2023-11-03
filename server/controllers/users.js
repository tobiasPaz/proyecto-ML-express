const Usuario = require("../modules/user");

const verUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

const verUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
};

const crearUsuario = async (req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.json({ status: "Usuario creado" });
};

const borrarUsuario = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ status: "Usuario borrado" });
};

const actualizarUsuario = async (req, res) => {
  await Usuario.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "Usuario actualizado" });
};

module.exports = {
  verUsuarios,
  verUsuario,
  crearUsuario,
  borrarUsuario,
};
