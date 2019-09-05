const express = require("express");
var router = express.Router();
const mongo = require("../database/posts");

router.get("/", (req, res) => {
  res.send("Posts Router Working Fine");
});

router.post('/a', (req, res) => {
  console.log('SERVER:Get Data','get posts from server');
  console.log("body", req.body)
  mongo.createPosts(req.body, (result) => {
    res.json(result);

  })
  
});


router.get('/Posts', (req, res) => {
  console.log('SERVER:Get Data','get posts from server');
  mongo.getPosts((result) => {
    res.json(result);
  })
});
module.exports = router;
