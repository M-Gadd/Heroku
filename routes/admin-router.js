const express = require("express");

const User= require("../models/user-model");

const router = express.Router();


router.get("/admin/users", (req,res,next)=>{
  if(!req.user || req.user.role !== "admin") {
    next();
    return;
  }
  User.find()
    .then((usersFromDb)=>{
      res.locals.userList = usersFromDb;
      res.render("admin-views/user-list-page");
    })
    .catch((err)=>{
      next(err);
    });
})

module.exports = router;