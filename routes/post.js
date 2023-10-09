

const posttest=require('express').Router()

posttest.get("/",(req,res)=>{
 
    res.json(req.body);
})

// posttest.route("/:id")
// .get((req,res)=>res.json({msg: "you requeid id is"+req.params.id}))
// .post(res.json(req.params.id))
// .delete()



module.exports=posttest;