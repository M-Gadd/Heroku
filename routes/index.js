const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  // if(req.user){
  //   res.send("YOU ARE LOGGED IN");
  // }
  // else {
  res.render('index');
  // }
});

module.exports = router;
