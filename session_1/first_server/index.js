const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    fs.readFile('demo2.html', (err, data) =>{
        res.writeHead(200 , {"Content-Type" : "text/html"});
        res.write(data);
        res.end()
    })
}).listen(8000)

/*
See steps below to run the program:

Step 1) Open the terminal and type: node index
        Note: make sure you're in the right path
              something like: Desktop\session_1\first_server

Step 2) Open the browser and type in the bar: localhost:8000
*/