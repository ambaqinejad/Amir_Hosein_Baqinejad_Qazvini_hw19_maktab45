// nodejs modules
const path = require('path');

// third party modules

const getSignUpPage = (req, res, next) => {
    res.render(path.join('auth', 'signUp.ejs'), {
        title: 'SignUp'
    });
}

const registrationProcess = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

module.exports = {
    getSignUpPage,
    registrationProcess
}