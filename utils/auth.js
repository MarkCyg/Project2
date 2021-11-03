const withAuth = (req, res, next) => {
    console.log(req.body);
    console.log(req.session);
    if (!req.session.user_id) {
        console.log("string")
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;