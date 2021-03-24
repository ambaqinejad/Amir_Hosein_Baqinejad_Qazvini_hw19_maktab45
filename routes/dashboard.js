const express = require('express');

const path = require('path');

const router = express.Router();

router.use(express.static(path.join(process.cwd(), 'public')));

router.get('/', function(req, res, next) {
    res.render('dashboard.ejs')
})

module.exports = router;