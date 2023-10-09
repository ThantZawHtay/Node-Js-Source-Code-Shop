const routers=require ('express').Router();
routers.get("/",(req,res)=>{
    res.json({msg:"success"});
})

routers.get("/:id",(req,res)=>{
    let id=req.params.id;
    res.json({id});
})


routers.route("/:id")
.get((req,res)=>res.json({msg: "you requeid id is"+req.params.id}))
.post(res.json({msg:req.params.id}))
//rout can call another routerr
module.exports=routers;