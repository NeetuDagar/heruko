const express=require('express')

const router=express.Router()

router.get("/",function(req,res){
	res.send(`<h1>Hello Neetu welocome! to Heroku</h1>`)
})
module.exports=router