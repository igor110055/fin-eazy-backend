const express = require("express");
const app = express();
const path = require("path");;

app.use(express.json());
;
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config.env") });
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");

const UserSchema= require("./model/Test");

mongoose  
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

  const test=async(req,res)=>{
    try {
  const test=await UserSchema.find();
  console.log(test);
    } catch (err) {
      console.log(err); 
    }
  }
  test();