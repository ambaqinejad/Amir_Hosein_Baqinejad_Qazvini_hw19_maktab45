const getDashboardPage = (req, res, next) => {
    res.render('dashboard.ejs')
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

module.exports = {
    getDashboardPage,
    getWhoAmIPage,
    getModifyInformationPage
}