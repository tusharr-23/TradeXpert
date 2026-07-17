const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },

  avg: {
    type: Number,
    required: true,
  },
});

module.exports = { HoldingsSchema };
