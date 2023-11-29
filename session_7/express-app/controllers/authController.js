module.exports = {
    getLogin: (req, res) => {
        const loggedIn = req.get("Cookie").split("=")[1];
        res.render("login", {
            title: "Login",
            isAuthenticated: req.loggedIn
        });
    },

    postLogin: (req, res) => {
        // req.loggedIn = true;
        res.setHeader("Set-Cookie", "loggedIn=true")
        res.redirect("/");
    }
}