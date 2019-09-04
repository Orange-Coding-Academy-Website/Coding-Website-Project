const db = require("../database");

let getUsers = (cb) => {
    db.signIn.find({},(err, data)=>{
        if (err) {
            cb(err);
          } else {
            console.log("data:", data);
            cb(data);
          }
    })
}
module.exports = {getUsers};
