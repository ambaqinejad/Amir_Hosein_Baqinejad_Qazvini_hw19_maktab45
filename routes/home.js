// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const homeController = require(path.join(process.cwd(), 'controllers', 'home.js'));

const router = express.Router();

router.get('/', homeController.getHomePage);

module.exports = router;