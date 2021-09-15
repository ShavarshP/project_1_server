const { Schema, model } = require("mongoose");

const schema = new Schema({
  img: Array,
  Mobile_number: { type: String },
  area: { type: String },
  building_type: { type: String },
  category: { type: String },
  street: { type: String },
  description: { type: String },
  district: { type: String },
  floor: { type: String },
  price: { type: String },
  rent: { type: Boolean },
  rooms: { type: String },
  sale: { type: Boolean },
  search_code: { type: String },
  loc: { type: String },
});

module.exports = model("Home", schema);
