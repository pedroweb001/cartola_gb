const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Testando, deu certo");
})

module.exports = app;