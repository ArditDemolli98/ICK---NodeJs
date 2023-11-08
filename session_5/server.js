const http = require("http");

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === "/arditi"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write("<html>");
        res.write("<head><title>Serveri</title></head>")
        res.write("<body><h1>Hello from Arditi</h1></body>")
        res.write("</html>");
        return res.end();
    }
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.write("<html>");
    res.write("<head><title>Serveri</title></head>")
    res.write("<body><h1>Hello from NodeJs</h1></body>")
    res.write("</html>");
    return res.end();
})
server.listen(8000)