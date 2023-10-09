const express=require('express');
const res = require('express/lib/response');
const app=express();

//call routers/user route
const userRoute=require("./routes/user");



app.get("*",(req,res)=>{
    res.json({msg:"no route found"});
})

app.listen(3000,console.log("running"));