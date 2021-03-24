// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const signInController = require(path.join(process.cwd(), 'controllers', 'auth', 'signIn.js'));
const validator = require(path.join(process.cwd(), 'tools', 'validator.js'));

const router = express.Router();

router.get('/', signInController.getSignInPage);

router.post('/login',
    validator.isNotEmpty('password', '/auth/signIn'),
    validator.isNotEmpty('username', '/auth/signIn'),
    signInController.loginProcess);


module.exports = router;