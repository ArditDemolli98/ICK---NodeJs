module.exports = {
    getLogin: (req, res) => {
        res.render("login", {title: "Login"});
    }
}