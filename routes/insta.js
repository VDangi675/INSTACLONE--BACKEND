const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postModal = require("../models/postmodel");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router()


router.get("/data", async (req, res) => {
    try {
      const data = await postModal.find();
      res.send(data)
  } catch (e) {
      res.json({ name: "error in loading data" })
  }
})


router.post("/postdata",  async (req, res) => {
    //console.log(req.body);
    var today = new Date();
    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      time: "numeric",
    };
    var setday = today.toLocaleDateString("en-US", options);
    console.log(setday);
    try{
      const user = await postModal.create({
        author: req.body.author,
        location: req.body.location,
        image: req.body.image,
        likes: Math.round(Math.random() * 100),
        date: setday,
        description: req.body.description,
      })
      res.json({ok:"send"})
    } catch (e) {
      res.json({ error: e.message })
  }
  });

  module.exports =router