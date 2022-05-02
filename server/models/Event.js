const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
