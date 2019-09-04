const db = require("../database");
const eventData = [
  {
    img:
      "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "My Flower1",
    disc:
      "Lorem ipsum dolor sit amet, eu nec numquam reformidans. Et ius aliquip appetere nominati. Dicit decore ridens ius ea, vel falli malorum corrumpit et. Augue vituperatoribus ei sed, in corrumpit dignissim his. Sit no dicant impedit, in pri persecuti scribentur efficiantur, sed libris feugiat delenit an. Odio rebum comprehensam sed no."
  },
  {
    img:
      "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "My Flower2",
    disc:
      "Lorem ipsum dolor sit amet, eu nec numquam reformidans. Et ius aliquip appetere nominati. Dicit decore ridens ius ea, vel falli malorum corrumpit et. Augue vituperatoribus ei sed, in corrumpit dignissim his. Sit no dicant impedit, in pri persecuti scribentur efficiantur, sed libris feugiat delenit an. Odio rebum comprehensam sed no."
  },
  {
    img:
      "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "My Flower3",
    disc:
      "Lorem ipsum dolor sit amet, eu nec numquam reformidans. Et ius aliquip appetere nominati. Dicit decore ridens ius ea, vel falli malorum corrumpit et. Augue vituperatoribus ei sed, in corrumpit dignissim his. Sit no dicant impedit, in pri persecuti scribentur efficiantur, sed libris feugiat delenit an. Odio rebum comprehensam sed no."
  },
  {
    img:
      "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "My Flower4",
    disc:
      "Lorem ipsum dolor sit amet, eu nec numquam reformidans. Et ius aliquip appetere nominati. Dicit decore ridens ius ea, vel falli malorum corrumpit et. Augue vituperatoribus ei sed, in corrumpit dignissim his. Sit no dicant impedit, in pri persecuti scribentur efficiantur, sed libris feugiat delenit an. Odio rebum comprehensam sed no."
  },
  {
    img:
      "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "My Flower5",
    disc:
      "Lorem ipsum dolor sit amet, eu nec numquam reformidans. Et ius aliquip appetere nominati. Dicit decore ridens ius ea, vel falli malorum corrumpit et. Augue vituperatoribus ei sed, in corrumpit dignissim his. Sit no dicant impedit, in pri persecuti scribentur efficiantur, sed libris feugiat delenit an. Odio rebum comprehensam sed no."
  },
  {
    img:
      "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "My Flower6",
    disc:
      "Lorem ipsum dolor sit amet, eu nec numquam reformidans. Et ius aliquip appetere nominati. Dicit decore ridens ius ea, vel falli malorum corrumpit et. Augue vituperatoribus ei sed, in corrumpit dignissim his. Sit no dicant impedit, in pri persecuti scribentur efficiantur, sed libris feugiat delenit an. Odio rebum comprehensam sed no."
  }
];

//create function
let createEvents = cb => {
  db.event.create(eventData, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("DB:createTasks My Events data", data);
      cb(data);
    }
  });
};

// Get function
let getEvents = cb => {
  db.event.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("DB:Get Events data:", data);
      cb(data);
    }
  });
};

// example of module.export
module.exports = {
  getEvents,
  createEvents
};
