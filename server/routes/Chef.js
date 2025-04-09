const express = require("express");
const router = express.Router();
const { getAllChefs, getChefById, createChef, updateChef, deleteChef } = require("../controller/Chef");

router.route("/").get(getAllChefs).post(createChef);
router.route("/:id").get(getChefById).put(updateChef).delete(deleteChef);

module.exports = router;
