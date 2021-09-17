const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  img: [String],
  area: { type: String },
  street: { type: String },
  price: { type: String },
  rooms: { type: String },
  owner: { type: String },
  sale: { type: Boolean },
});

module.exports = model("HomeList", schema);
