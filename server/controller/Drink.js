const Drink = require("../models/Drink");

const getAllDrinks = async (req, res) => {
  const drinks = await Drink.find({});
  res.status(200).json({ drinks });
};

const getDrinkById = async (req, res) => {
  const { id } = req.params;
  const drink = await Drink.findById(id);
  res.status(200).json({ drink });
};

const createDrink = async (req, res) => {   
  const drink = await Drink.create(req.body);
  res.status(201).json({ drink });
};

const updateDrink = async (req, res) => {
  const { id } = req.params;
  const drink = await Drink.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ drink });
};

const deleteDrink = async (req, res) => {
  const { id } = req.params;
  const drink = await Drink.findByIdAndDelete(id);
  res.status(200).json({ drink });
};

module.exports = { getAllDrinks, getDrinkById, createDrink, updateDrink, deleteDrink };    
