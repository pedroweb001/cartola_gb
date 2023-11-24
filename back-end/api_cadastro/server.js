const app = require("./config/express");
const port = 5000;


app.listen(port, ()=>{
console.log(`servidor rodando na porta ${port}`);
  });