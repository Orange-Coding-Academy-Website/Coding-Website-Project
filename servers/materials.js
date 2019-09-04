const express = require("express");
var router = express.Router();
const mongo = require("../database/materials");

router.get("/", (req, res) => {
  res.send("Materials Router Working Fine");
});


//post data from data base
router.post("/a", (req, res) => {
  mongo.myMaterial(result => {
    res.json(result);
  });
});


// router.post("/HTMLB", (req, res) => {
//   mongo.HTMLBasic(result => {
//     res.json(result);
//   });
// });
// end post data

//get to show data
router.get("/all", (req, res) => {
  mongo.getMaterial(result => {
    res.json(result);
  });
});

// router.get("/HTMLBasic", (req, res) => {
//   mongo.getMaterialHTMLBasic(result => {
//     res.json(result);
//   });
// });
// end get data

// const PORT=9000
// app.listen(PORT,()=>console.log(`server started on port ${PORT}`))
module.exports = router;
