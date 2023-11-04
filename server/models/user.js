const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombreusuario: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  publicaciones: [{ type: Schema.Type.objectId, ref: "Publicacion" }],
  comentarios: [{ type: Schema.Type.objectId, ref: "Comentario" }],
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
