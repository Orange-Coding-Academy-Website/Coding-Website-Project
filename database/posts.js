const db = require("../database");

//create function
let createPosts = (addedPost,cb) => {
  db.posts.create(
    addedPost,
    (err, data) => {
      if (err) {
        cb(err);
      } else {
        console.log("DB:createTasks My Posts data", data);
        getPosts(cb);
      }
    }
  );
};

// Get function
let getPosts = cb => {
  db.posts.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("DB:Get posts data:", data);
      cb(data);
    }
  });
};

// example of module.export
module.exports = {
  getPosts,
  createPosts
};
