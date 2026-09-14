const express = require("express");
const app = express();

  let port = 3000;
 
   app.use((req,res)=>{
    console.log("Hi, I am a Middleware");
    res.send("Middleware request is sended");
   });


   app.use("/Listing",(req,res)=>{
    console.log("Listing are showing");
   })


  app.listen(port,()=>{
    console.log(`port is Runing on ${port}`) 
  });