const express = require("express");
const router = express.Router();
const { getAllDrinks, getDrinkById, createDrink, updateDrink, deleteDrink } = require("../controller/Drink");

router.route("/").get(getAllDrinks).post(createDrink);
router.route("/:id").get(getDrinkById).put(updateDrink).delete(deleteDrink);

module.exports = router;
