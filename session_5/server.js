const http = require("http");

const server = http.createServer((req, res)=>{
    const url = req.url;
    
    if(url === "/about"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write("<html>");
        res.write("<head><title>About</title></head>")
        res.write("<body><h1>This is the about page</h1></body>")
        res.write("</html>");
        return res.end();
    } else if (url === "/career") {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write("<html>");
        res.write("<head><title>Career</title></head>")
        res.write("<body><h1>This is the career page</h1></body>")
        res.write("</html>");
        return res.end();
    } else if (url === "/contact") {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write("<html>");
        res.write("<head><title>Contact</title></head>")
        res.write("<body><h1>This is the contact page</h1></body>")
        res.write("</html>");
        return res.end();
    } else if(url !== "/" ) {
        res.writeHead(400, {"Content-Type" : "text/html"})
        res.write("<html>");
        res.write("<head><title>Error</title></head>")
        res.write("<body><h1>Page is missing</h1></body>")
        res.write("</html>");
        return res.end();
    }
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.write("<html>");
    res.write("<head><title>Home</title></head>")
    res.write("<body><h1>This is the home page</h1></body>")
    res.write("</html>");
    return res.end();
})
server.listen(8000);