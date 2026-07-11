const { Schema } = require("mongoose");

const WatchListSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = { WatchListSchema };
