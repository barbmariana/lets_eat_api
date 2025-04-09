const mongoose = require("mongoose");

const ChefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  restaurant: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  ],
});

module.exports = mongoose.model("Chef", ChefSchema);
