let express=require("express");
let app=express();
const ExpressError=require("./ExpressError")

const checkToken= (req,res,next)=>{
    const {token}=req.query;
    if(token==="giveaccess"){
        next()
    }else{
        throw new ExpressError(401,"ACCESS DENIDE!!");
    }
}

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

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