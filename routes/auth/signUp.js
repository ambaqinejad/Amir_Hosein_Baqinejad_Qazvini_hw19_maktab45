// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const signUpController = require(path.join(process.cwd(), 'controllers', 'auth', 'signUp.js'));
const validator = require(path.join(process.cwd(), 'tools', 'validator.js'));

const router = express.Router();

router.use(express.static(path.join(process.cwd(), 'public')))

router.post('/register',
    validator.isNotEmpty('firstName'),
    validator.isNotEmpty('lastName'),
    validator.isNotEmpty('password'),
    validator.isNotEmpty('username'),
    validator.isNotEmpty('email'),
    validator.isNotEmpty('phone'),
    validator.isNotEmpty('gender'),
    validator.isLength('password', { min: 6, max: 12 }),
    validator.isEmail('email'),
    validator.isLength('phone', { min: 10, max: 10 }),
    validator.isNumber('phone'),
    signUpController.registrationProcess);

router.get('/', signUpController.getSignUpPage)


module.exports = router;