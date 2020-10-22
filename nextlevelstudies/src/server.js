const express = require("express")
const server = express()

// set public paste
server.use(express.static("public"))
//using a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
// set the way for my aplication
// initial page
server.get("/", (req, res) => {
    res.render("index.html")
})
server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})

//turn on the server
server.listen(3000)