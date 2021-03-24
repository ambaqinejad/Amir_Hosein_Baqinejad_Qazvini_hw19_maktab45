// nodejs modules
const path = require('path');

// third party modules

// my own modules
const Blogger = require(path.join(process.cwd(), 'models', 'blogger.js'));
const redirect = require(path.join(process.cwd(), 'tools', 'redirection.js'));

const getDashboardPage = (req, res, next) => {
    res.render('dashboard.ejs', {
        blogger: req.session.blogger
    })
}

const getWhoAmIPage = (req, res, next) => {
    res.render('whoAmI.ejs', {
        blogger: req.session.blogger
    })
}

const getModifyInformationPage = (req, res, next) => {
    res.render('modifyInformation.ejs', {
        blogger: req.session.blogger,
        message: req.query.message || ''
    })
}

const updateBlogger = (req, res, next) => {
    const bloggerNewObj = {
        firstName: req.body.firstName || req.session.blogger.firstName,
        lastName: req.body.lastName || req.session.blogger.lastName,
        username: req.body.username || req.session.blogger.username,
        gender: req.body.gender || req.session.blogger.gender,
        profileImage: req.body.profileImage || req.session.blogger.profileImage,
        phone: req.body.phone ? `+98${req.body.phone}` : req.session.blogger.phone,
        email: req.body.email || req.session.blogger.email,
        createdAt: req.body.createdAt || req.session.blogger.createdAt
    }

    if (req.body.password) {
        bloggerNewObj.password = req.body.password
    }

    Blogger.findOne({ username: bloggerNewObj.username }, (err, blogger) => {
        if (err) {
            return redirect(res, '/dashboard/modifyInformation', 'Something went wrong.');
        }
        if (blogger && bloggerNewObj.username !== blogger.username) {
            return redirect(res, '/dashboard/modifyInformation', 'Username is already in use.');
        }
        Blogger.updateOne({ username: req.session.blogger.username }, bloggerNewObj, (err) => {
            if (err) {
                return redirect(res, '/dashboard/modifyInformation', 'Something went wrong.');
            }
            req.session.blogger = null;
            return res.redirect('/auth/signIn');
        })
    })
}

const logout = (req, res, next) => {
    req.session.blogger = null;
    return res.redirect('/auth/signIn')
}

module.exports = {
    getDashboardPage,
    getWhoAmIPage,
    getModifyInformationPage,
    updateBlogger,
    logout
}