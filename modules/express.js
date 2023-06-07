const express = require('express')

const app = express()
app.get('/home', (req, res)=>{
    res.contentType("application/html")
    res.status(200).send("<h1> hello world </h1>")
})

app.get('/users', (req, res)=>{
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

    res.status(200).json(users);
});

const port = 8080;

app.listen(port, ()=> console.log(`rodando com express na porta ${port}`))