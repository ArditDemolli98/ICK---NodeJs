module.exports = {
    getLogin: (req, res) => {
        res.render("login", {
            title: "Login",
            isAuthenticated: req.session.loggedIn
        });
    },

    postLogin: (req, res) => {
        req.session.loggedIn = true;
        res.redirect("/");
    }
}