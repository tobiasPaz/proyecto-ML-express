const moongose = require("mongoose");
const Schema = moongose.Schema;

const puclicacionSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  categorias: [
    {
      type: Schema.Types.ObjectId,
      ref: "Categoria",
    },
  ],
  comentarios: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Publicacion = moongose.model("Publicacion", puclicacionSchema);
module.exports = Publicacion;

