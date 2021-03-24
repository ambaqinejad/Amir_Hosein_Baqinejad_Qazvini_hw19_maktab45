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
    validator.isNotEmpty('firstName', '/auth/signUp'),
    validator.isNotEmpty('lastName', '/auth/signUp'),
    validator.isNotEmpty('password', '/auth/signUp'),
    validator.isNotEmpty('username', '/auth/signUp'),
    validator.isNotEmpty('email', '/auth/signUp'),
    validator.isNotEmpty('phone', '/auth/signUp'),
    validator.isNotEmpty('gender', '/auth/signUp'),
    validator.isLength('password', { min: 6, max: 12 }, '/auth/signUp'),
    validator.isEmail('email', '/auth/signUp'),
    validator.isLength('phone', { min: 10, max: 10 }, '/auth/signUp'),
    validator.isNumber('phone', '/auth/signUp'),
    signUpController.registrationProcess);

router.get('/', signUpController.getSignUpPage)


module.exports = router;