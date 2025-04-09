const Dish = require("../models/Dish");

const getAllDishes = async (req, res) => {
  const dishes = await Dish.find({});
  res.status(200).json({ dishes });
}; 

const getDishById = async (req, res) => {
  const { id } = req.params;
  const dish = await Dish.findById(id);
  res.status(200).json({ dish });
};

const createDish = async (req, res) => {
  const dish = await Dish.create(req.body);
  res.status(201).json({ dish });
}; 

const updateDish = async (req, res) => {
  const { id } = req.params;
  const dish = await Dish.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ dish });
};

const deleteDish = async (req, res) => {
  const { id } = req.params;
  const dish = await Dish.findByIdAndDelete(id);
  res.status(200).json({ dish });
};

module.exports = { getAllDishes, getDishById, createDish, updateDish, deleteDish };
