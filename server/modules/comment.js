const moongose = require("mongoose");
const schema = moongose.Schema;

const commentSchema = new schema({
    autor: {
        type: moongose.Schema.Types.ObjectId,
        ref: "User"
    },
    contenido: {
        type: String,
        required: true
    },
    puntuacion: {
        type: Number,
    }
})