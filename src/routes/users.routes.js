const express = require('express');
const { register, processRegister, login, processLogin, profile, update, logout } = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const router = express.Router();

/* /users */
router
  .get('/register', register)
  .post('/register',registerValidator, processRegister)
  .get('/login',login)
  .post('/login',loginValidator, processLogin)
  .get('/profile',profile)
  .put('/update',update)
  .get('/logout',logout)

module.exports = router;
