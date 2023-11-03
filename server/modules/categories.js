const moongose = require("mongoose");
const Schema = moongose.Schema;

const categorySchema = new Schema({
  post: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Post",
  },
  name: {
    type: String,
    required: true,
  },
});
