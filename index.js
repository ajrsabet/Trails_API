const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
  res.send('Welcome to my API');
})

app.get('/trail',(req,res)=>{
  res.json({
    name:"North Lake Whatcom Trail",
    length:"1 mile"
  })
})

app.listen(PORT,function () {
  console.log("listening on port" + PORT);
  
})