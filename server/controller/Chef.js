const Chef = require("../models/Chef");

const getAllChefs = async (req, res) => {
  const chefs = await Chef.find({});
  res.status(200).json({ chefs });
};

const getChefById = async (req, res) => {
  const { id } = req.params;
  const chef = await Chef.findById(id);
  res.status(200).json({ chef });
};

const createChef = async (req, res) => {
  const chef = await Chef.create(req.body);
  res.status(201).json({ chef });
};
const updateChef = async (req, res) => {
  const { id } = req.params;
  const chef = await Chef.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ chef });
};
const deleteChef = async (req, res) => {
  const { id } = req.params;
  const chef = await Chef.findByIdAndDelete(id);
  res.status(200).json({ chef });
};
module.exports = { getAllChefs, getChefById, createChef, updateChef, deleteChef };
