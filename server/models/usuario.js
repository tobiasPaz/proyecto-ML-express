const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const usuarioSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
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
  publicaciones: [{ type: Schema.Types.ObjectId, ref: "Publicacion" }],
  comentarios: [{ type: Schema.Types.ObjectId, ref: "Comentario" }],
});

usuarioSchema.plugin(passportLocalMongoose);

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;

// {
//   "nombreusuario": "nose",
//   "nombre": "Tobias",
//   "apellido": "Paz",
//   "email": "tobiashubelpa@gmail.com",
//   "clave": "90804b79"
// }
