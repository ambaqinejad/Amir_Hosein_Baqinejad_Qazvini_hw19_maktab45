// third party modules
const express = require('express');

// nodejs modules
const path = require('path');

// my own modules
const dashboardController = require(path.join(process.cwd(), 'controllers', 'dashboard.js'));
const validator = require(path.join(process.cwd(), 'tools', 'validator.js'));

const router = express.Router();

router.use(express.static(path.join(process.cwd(), 'public')));

router.get('/', dashboardController.getDashboardPage);

router.get('/whoAmI', dashboardController.getWhoAmIPage);

router.get('/modifyInformation',
    validator.isLength('password', { min: 6, max: 12 }, '/dashboard/modifyInformation'),
    validator.isEmail('email', '/dashboard/modifyInformation'),
    validator.isLength('phone', { min: 10, max: 10 }, '/dashboard/modifyInformation'),
    validator.isNumber('phone', '/dashboard/modifyInformation'),
    dashboardController.getModifyInformationPage);

router.get('/logout', dashboardController.logout)

router.post('/update', dashboardController.updateBlogger);

module.exports = router;