const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"Content-Type": "application/json"})
        res.write(JSON.stringify({message: 'Hello there'}))
        res.end();
    }
})

server.listen(3001,()=>{
    console.log('server started on port 3001');
})