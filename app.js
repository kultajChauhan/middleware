let express=require("express");
let app=express();

app.use((req,res,next)=>{
req.restime=new Date(Date.now()).toString();
   console.log(req.hostname, req.method,req.path, req.restime);
    next();
})

app.get("/",(req,res)=>{
    res.send("Hi, I am a root")
})

app.listen(8080,()=>{
    console.log("Server is on, on port no.8080");
})