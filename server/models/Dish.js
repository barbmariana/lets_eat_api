const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  nationality: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dish", DishSchema);

