const moongose = require("mongoose");
const Schema = moongose.Schema;

const categoriaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  publicaciones: [
    {
      type: Schema.types.ObjectId,
      ref: "Publicacion",
    },
  ],
});

const Categoria = moongose.model("Categoria", categoriaSchema);
module.exports = Categoria;
