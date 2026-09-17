const express = require("express");
const app = express();

  let port = 3000;
 
  //  app.use((req,res,next)=>{
  //   console.log("Hi, I am 1st Middleware");
  //   next();
  //  });

  //  app.use((req,res,next)=>{
  //   console.log("Hi, I am 2nd Middleware");
  //   next();
  //  });





  // Making Logger Functionality my using middleware 

  //   
  
      // Specific Path Middleware that rubs only ones for a specific request of that path 
      app.use("/listings",(req,res,next)=>{
        console.log("Hi , I am for Listing path");
        next();
      });

      app.get("/",(req,res)=>{
    res.send("HI, I am Root ");
   });

   app.get("/listings",(req, res)=>{
    res.send("Listing are showing");
   });


  app.listen(port,()=>{
    console.log(`port is Runing on ${port}`) 
  });