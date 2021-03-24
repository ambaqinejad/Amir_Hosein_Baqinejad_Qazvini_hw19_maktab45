const url = require('url');

const redirect = (res, path, message) => {
    res.redirect(url.format({
        pathname: path,
        query: { message }
    }))
}

module.exports = redirect;