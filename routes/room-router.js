

const express = require("express");

const Room = require("../models/room-model");

const router = express.Router();

router.get("/room/add", (req,res,next)=>{
  if(!req.user) {
    res.flash("error", "You must be logged in to see that.");
    res.redirect('/login');
    return;
  }
  res.render("room-views/room-form");
});

router.post("/process-room", (req,res,next)=>{
  const {name, description, pictureUrl} = req.body;
  
  Room.create({name, description, pictureUrl, owner: req.user._id})
    .then(()=>{
      res.flash("success", "Room created");
      res.redirect("/");
    })
    .catch((err)=>{
      next(err);
    });
});

router.get('/my-rooms', (req,res,next)=>{
  Room.find({owner: req.user._id})
    .populate("owner")
    .then((roomsFromDb) => {
      res.locals.roomList = roomsFromDb;
      res.render("room-views/room-list-page");
    })
    .catch((err) => {
      next(err);
    });
} )


module.exports = router;