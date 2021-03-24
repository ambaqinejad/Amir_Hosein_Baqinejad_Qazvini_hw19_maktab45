// nodejs modules
const path = require('path');

// third party modules

// my own modules

const getHomePage = (req, res, next) => {
    res.render('home.ejs', {
        title: 'Home'
    })
}

module.exports = {
    getHomePage
}