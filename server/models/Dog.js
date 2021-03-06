const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: "Your dog needs a name!",
    minlength: 1,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Dog = model("Dog", dogSchema);

module.exports = Dog;
