const {
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted,
    sendAllUsers,
    sendMe,
  } = require("../controllers/users");
  const {
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    findUserById,
    checkEmptyNameAndEmail,
    updateUser,
    deleteUser,
    hashPassword,
    filterPassword,
  } = require("../middlewares/users");
  const { checkAuth } = require('../middlewares/auth');
  
  const usersRouter = require("express").Router();
  
  usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
  
  usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  );
  
  usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

  usersRouter.get("/me", checkAuth, sendMe);
  
  usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
  
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  
  module.exports = usersRouter;


/*const usersRouter = require('express').Router();
const findAllUsers = require('../middlewares/users');
const findUserById = require('../middlewares/users');
const deleteUser = require('../middlewares/users');
const updateUser = require('../middlewares/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const sendUserById = require('../controllers/users');
const sendUserUpdated = require('../controllers/users');
const sendUserDeleted = require('../controllers/users');
const checkIsUserExists = require('../middlewares/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users');
const checkEmptyNameAndEmail = require('../middlewares/users');
const hashPassword = require('../middlewares/users');

usersRouter.get('/users', (res, req) => {});

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, hashPassword, createUser, sendUserCreated);

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;*/