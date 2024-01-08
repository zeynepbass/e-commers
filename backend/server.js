const express = require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv");
const app = express();
const PORT=5000;
dotenv.config();
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb")
    } catch (error) {
         console.log(error)
    }
}
app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.get("/api", (req, res)=> {
  res.send("This is API Route.") 
})

app.listen(5000,()=> {
    connect();
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
})
