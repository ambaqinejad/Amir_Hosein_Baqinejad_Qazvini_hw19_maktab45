// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const dashboardController = require(path.join(process.cwd(), 'controllers', 'dashboard.js'));

const router = express.Router();

router.use(express.static(path.join(process.cwd(), 'public')));

router.get('/', dashboardController.getDashboardPage);

router.get('/whoAmI', dashboardController.getWhoAmIPage);

router.get('/modifyInformation', dashboardController.getModifyInformationPage);

module.exports = router;