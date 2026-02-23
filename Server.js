
const express = require("express");
const server = express()
const PORT = 3000

server.get("/", (req, res) => {
    res.send('This is the first page')
})
server.get("/user", (req, res) => {
    res.send('This is tenerifa')
})
server.get("/auth/login", (req, res) => {
    res.send('This is the login')
})
server.get("/auth/create", (req, res) => {
    res.send('This is the create account page')
})


server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}` );

});  





    
 