const express = require("express")//import express

const app = express();//app create


app.get("/",(req, res)=>{
    res.status(201).json({
        message:"hello world"
    })
})
app.listen(3000,()=> {
    console.log("http://localhost:3000");
})
