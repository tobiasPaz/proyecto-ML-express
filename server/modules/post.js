const moongose = require("mongoose");
const schema = moongose.Schema;

const postSchema = new schema({
    autor: {
        type: moongose.Schema.Types.ObjectId,
        ref: "User"
    },
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    comentario: [{
        type: moongose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})
