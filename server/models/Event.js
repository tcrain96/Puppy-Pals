const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
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
  attendees: [{ type: Schema.Types.ObjectId, ref: "Dog" }],
});

const Event = model("Event", eventSchema);

module.exports = Event;
