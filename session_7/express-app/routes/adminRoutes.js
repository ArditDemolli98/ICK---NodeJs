app.get("/add-product", (req, res)=>{
    res.sendFile(path.join(__dirname, "views","add-product.html"));
})

app.post("/product", (req, res)=>{
    console.log(req.body);
    res.redirect("/add-product")
})