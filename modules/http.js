const http = require('http');

const port = 5000;

const server = http.createServer((req, res)=>{
     if(req.url === '/home' ){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<h1>home page </h1>');
     }
     if(req.url === '/users'){
        const users = [
            {
                name: 'John ryan',
                email: "john@doe.com"
            },
            {
                name: 'Wendy',
                email: "wendy@.com"
            },
           
        ];
    
        res.writeHead(200, {"Content-type":"application/json" });
        res.end(JSON.stringify(users));
    }
});





server.listen(port, () => console.log(`escutando na porta ${port} `));
