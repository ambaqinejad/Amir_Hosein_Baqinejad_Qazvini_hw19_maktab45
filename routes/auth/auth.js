// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const signUpRouter = require(path.join(__dirname, 'signUp.js'));

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/', express.static(path.join(process.cwd(), 'public')))

module.exports = router;