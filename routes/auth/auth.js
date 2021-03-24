// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const signUpRouter = require(path.join(__dirname, 'signUp.js'));
const signInRouter = require(path.join(__dirname, 'signIn.js'));

const router = express.Router();

router.use(express.static(path.join(process.cwd(), 'public')))
router.use('/signUp', signUpRouter);
router.use('/signIn', signInRouter);

module.exports = router;