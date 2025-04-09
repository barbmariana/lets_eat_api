const Category = require("../models/Category");

const getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json({ categories });
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  res.status(200).json({ category });
};

const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json({ category });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ category });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  res.status(200).json({ category });
};


module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
