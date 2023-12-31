const moongose = require("mongoose");
const Schema = moongose.Schema;

const comentarioSchema = new Schema({
  autor: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  contenido: {
    type: String,
    required: true,
  },
  puntuacion: {
    type: Number,
  },
  publicacion: {
    type: Schema.Types.ObjectId,
    ref: "Publicacion",
  },
});

const Comentario = moongose.model("Comentario", comentarioSchema);
module.exports = Comentario;
