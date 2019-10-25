const path=require('path')
const express=require("express")
const app=express()
const page = require(path.join( __dirname,'./adarsh'));



app.get("/myapp",(req,res,next)=>{
   res.send(`<h1> Hello Heroku this is my first deploy </h1>`)
})


app.use('', page);

app.listen(7000)
console.log("app is listening on 7000")