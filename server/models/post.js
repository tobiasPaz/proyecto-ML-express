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
    type: Schema.types.objectId,
    ref: "Usuario",
  },
  categorias: [
    {
      type: Schema.types.objectId,
      ref: "Categoria",
    },
  ],
  comentarios: [{ type: Schema.types.objectId, ref: "Comment" }],
});

const Publicacion = moongose.model("Publicacion", puclicacionSchema);
module.exports = Publicacion;
