const express = require("express");
const router = express.Router();
const Category = require("./Category");
const Dish = require("./Dish");
const Drink = require("./Drink");
const Restaurant = require("./Restaurant");
const Chef = require("./Chef");

router.use("/category", Category);
router.use("/dish", Dish);
router.use("/drink", Drink);
router.use("/restaurant", Restaurant);
router.use("/chef", Chef);

module.exports = router;
