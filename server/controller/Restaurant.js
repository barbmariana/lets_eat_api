const Restaurant = require("../models/Restaurant");

const getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.status(200).json({ restaurants });
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  const restaurant = await Restaurant.findById(id);
  res.status(200).json({ restaurant });
};

const createRestaurant = async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json({ restaurant });
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const restaurant = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ restaurant });
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  const restaurant = await Restaurant.findByIdAndDelete(id);
  res.status(200).json({ restaurant });
};

module.exports = { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant };
