const moongose = require("mongoose");
const Schema = moongose.Schema;

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  publicaciones: [
    {
      type: Schema.Types.ObjectId,
      ref: "Publicacion",
    },
  ],
});

const Categoria = moongose.model("Categoria", categoriaSchema);
module.exports = Categoria;

// {
//   "nombre": "movilidad"
// }
