const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codingWebsite", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection failed");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

let vidoesSchema = new mongoose.Schema({
  title: String,
  dis: String
});

let signInSchema = {
  email: String,
  password: String
};

let signUpSchema = {
  name: String,
  email: String,
  password: String
};

let videosSchema = {
  name: String,
  dis: String,
  url: String
};

let materialSchema = {
  name: String,
  video: String,
  slides: String,
  helpful: String
};

let postsSchema = {
  title: String,
  subject: String,
  priority: Number,
  component: String
  // comments: Array
};

let eventSchema = {
  img: String,
  title: String,
  disc: String
};

let Videos = mongoose.model("vidoes", vidoesSchema);
// let Material = mongoose.model("material", materialSchema);
let signIn = mongoose.model("signIn", signInSchema);
let signUp = mongoose.model("signUp", signUpSchema);
let videos = mongoose.model("videos", videosSchema);
let material = mongoose.model("material", materialSchema);
let posts = mongoose.model("posts", postsSchema);
let event = mongoose.model("event", eventSchema);

module.exports = {
  Videos,
  // Material,
  signIn,
  signUp,
  videos,
  material,
  posts,
  event
};
// let getVidoes = cb => {
//   Vidoes.find({}, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(data);
//     }
//   });
// };

// let createVideo = (add, cb) => {
//   // console.log("Add", add);
//   // console.log("cb", cb);

//   Vidoes.create(add, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       getVidoes(cb);
//     }
//   });
// };

// module.exports = {
//   getVidoes,
//   createVideo
// };
