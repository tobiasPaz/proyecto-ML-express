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
  publicaciones: [{ type: Schema.Types.ObjectId, ref: "Publicacion" }],
  comentarios: [{ type: Schema.Types.ObjectId, ref: "Comentario" }],
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;

//pruebas para el git


// {
//   "nombreusuario": "nose",
//   "nombre": "Tobias",
//   "apellido": "Paz",
//   "email": "tobiashubelpa@gmail.com",
//   "clave": "90804b79"
// }
