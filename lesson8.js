const express=require('express');
const less=express();
less.use(express.json());


const user=[
    {id:1,name:"thant zaw htay",age:22},
    {id:2,name:"aung auhng",age:22},
    {id:3,name:"zaw zaw",age:22}
];


const tt=require("./routes/post");
less.use("/posts",tt);

const test=require("./routes/user");

less.use("/users",test);



// less.get("/users",(req,res,next)=>{
//     res.json({user});
// })
// // user req id catch 
// less.get("/user/:id",(req,res)=>{
//  const id=req.params.id;
//  const ser=user.find(usr=>usr.id==id);
//  if(ser){
//     res.json({ser});
//  }
//  else{
//     res.json({msg:"no found"});
//  }
// })

// //user post

// less.post("/use",(req,res)=>{
//     const id=req.body.id;
//     const name=req.body.name;
//     const age=req.body.age;
//     const users ={
        
//             id:id,
//             name:name,
//             age:age
        
//     }
//     console.log(user);
//     user.push(users);
//     res.json({user});
// });

// less.post("/user/:id",(req,res)=>{
//     const id=req.params.id;
//     const newusers=user.find(use=>use.id==id);
//     if(newusers){
//         newusers.name=req.name;
//        res.json({user});
//     }else{
// res.json({msg:"nod found"});
//     }
// })

// less.delete("/user/:id",(req,res)=>{
//     const id= req.params.id;
//     const newuse=user.filter(use=>use.id!=id);
//     res.json({newuse});
// })


// less.get("*",(req,res,next)=>{
//     req.json({msg:"message no found"});

// })

less.listen(3000,console.log("i am users"));

