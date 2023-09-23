const express = require("express");
const cors = require("cors");
const { netconnect } = require("./db");
const { bookRouter } = require("./routes/book.route");
const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/books",bookRouter)

app.listen(process.env.port,async(req,res)=>{
    try{
       await netconnect
       console.log("connected to db")
       console.log(`backend running on ${process.env.port}`)
    }catch(err){
        res.send(err);
    }
})

