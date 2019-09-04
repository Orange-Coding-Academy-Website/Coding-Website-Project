const express = require("express");
var router = express.Router();
const mongo = require("../database/signIn");
//localhost9000/signIn
router.get("/", (req, res) => {
  res.send("signIn Router Working Fine");
});
 
router.post('/sign-in', (req, res) => {
  res.send("login rigestration working good");
});


// router.post("/sign-in", (req, res) => {
  
  // const newUser = req.body;
  // const dbResponse = mongo.addRepo(newRepo);

  // res.send(dbResponse);
// });
module.exports = router;
