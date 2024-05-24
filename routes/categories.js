
const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
} = require("../middlewares/categories");
const {
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
  sendAllCategories,
} = require("../controllers/categories");
const { checkAuth } = require('../middlewares/auth');

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);

categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;


/*const categoriesRouter = require('express').Router();
const findAllCategories = require('../middlewares/categories');
const findCategoryById = require('../middlewares/categories');
const deleteCategory = require('../middlewares/categories');
const updateCategory = require('../middlewares/categories');
const createCategory = require('../middlewares/categories');
const sendCategoryCreated = require('../controllers/categories');
const sendCategoryById = require('../controllers/categories');
const sendCategoryUpdated = require('../controllers/categories');
const sendCategoryDeleted = require('../controllers/categories');
const checkIsCategoryExists = require('../middlewares/categories');
const checkEmptyName = require('../middlewares/categories');

categoriesRouter.get('/categories', (res, req) => {});

categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCategoryCreated);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.put("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdated); 

categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;*/