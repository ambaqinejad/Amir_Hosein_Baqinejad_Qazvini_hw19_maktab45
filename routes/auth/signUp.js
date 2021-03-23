// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const signUpController = require(path.join(process.cwd(), 'controllers', 'auth', 'signUp.js'));


const router = express.Router();

router.get('/', signUpController.getSignUpPage)

router.post('/register', signUpController.registrationProcess)

module.exports = router;