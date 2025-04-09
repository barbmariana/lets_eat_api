const express = require("express");
const router = express.Router();
const { getAllDishes, getDishById, createDish, updateDish, deleteDish } = require("../controller/Dish");

router.route("/").get(getAllDishes).post(createDish);
router.route("/:id").get(getDishById).put(updateDish).delete(deleteDish);

module.exports = router;
