const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  SKU: {
    type: String,
    require: false,
  },
  notes: {
    type: String,
    require: false,
  },
  amountInStock: {
    type: String,
    required: true,
  },
  units: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  reorderAt: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", ItemSchema);