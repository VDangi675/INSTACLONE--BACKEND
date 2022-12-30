const mongoose = require("mongoose");
const express = require("express")
const app = express();

mongoose.connect("mongodb+srv://VDANGI:VDANGI@cluster0.ejp1w4w.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected to db"))


app.use(express.json());
const insta = require("./routes/insta")


app.use(insta)



app.listen(8081,()=>console.log("connected to Sucessfully"))