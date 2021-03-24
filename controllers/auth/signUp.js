// nodejs modules
const path = require('path');

// third party modules


// my own modules
const Blogger = require(path.join(process.cwd(), 'models', 'blogger.js'));
const redirect = require(path.join(process.cwd(), 'tools', 'redirection.js'));


const getSignUpPage = (req, res, next) => {
    res.render(path.join('auth', 'signUp.ejs'), {
        title: 'SignUp',
        message: req.query.message || ''
    });
}

const registrationProcess = (req, res, next) => {
    Blogger.findOne({ username: req.body.username }, (err, blogger) => {
        if (err) {
            return redirect(res, '/auth/signUp', 'Something went wrong.');
        }
        if (blogger) {
            return redirect(res, '/auth/signUp', 'Username is already in use.');
        }
        req.body.phone = `+98${req.body.phone}`
        new Blogger(req.body).save((err => {
            if (err) {
                return redirect(res, '/auth/signUp', 'Something went wrong.');
            }
            res.redirect('/auth/signIn')
        }))
    })
}

module.exports = {
    getSignUpPage,
    registrationProcess
}