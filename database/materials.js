const db = require("../database");

//start create my data by const manual
const materialData = [
  {
    name: "HTML",
    video:
      "https://www.youtube.com/watch?v=dD2EISBDjWM&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB",
    slides:
      "https://drive.google.com/drive/u/2/folders/1V925dCzH2zjxfooojdP27YSBlno7tOeu",
    helpful: "https://www.w3schools.com/html/html_intro.asp"
  },
  {
    name: "CSS",
    video:
      "https://www.youtube.com/watch?v=qKoajPPWpmo&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C",

    slides: "https://www.w3schools.com/css/",
    helpful: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },

  {
    name: "JavaScript",
    video:
      "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",

    slides:
      "https://drive.google.com/drive/u/2/folders/1yzenjnUdapuunZxQVJj_SmoVBzChvQWy",

    helpful: "https://www.w3schools.com/js/"
  },
  {
    name: "Bootstrap",
    video:
      "https://www.youtube.com/watch?v=314m7YBRFvQ&list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V",

    slides:
      "https://drive.google.com/drive/u/2/folders/1eRCuT0PCERfFrbzqlnsrCQIH5tZLdTcz",

    helpful: "https://www.w3schools.com/bootstrap/"
  },
  {
    name: "Jqure",
    video:
      "https://www.youtube.com/watch?v=a59kOE2Ma1Q&list=PL6n9fhu94yhVDV697uvHpavA3K_eWGQap",

    slides:
      "https://drive.google.com/drive/u/2/folders/10vRK8sOdxH4e8_3Jpg97gLDQnXkZy0JD",

    helpful: "https://www.w3schools.com/jquery/"
  },
  {
    name: "React js",
    video: "https://www.youtube.com/watch?v=sBws8MSXN7A&t=4956s",

    slides:
      "https://drive.google.com/drive/u/2/folders/1xIwFdHEVvDg-hIFSasPMyWIHgfKMKIng",

    helpful: "https://www.w3schools.com/react/"
  }
];

// const HTMLBasic = [
//   {
//     name: "Video",
//     m1:
//       "https://www.youtube.com/watch?v=dD2EISBDjWM&list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB"
//   },

//   { name: "Article", m1: "https://www.w3schools.com/html/html_intro.asp" },

//   {
//     name: "Artical",
//     m1:
//       "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
//   }
// ];
//end of create my data

//create function Data (static data)
let myMaterial = cb => {
  db.material.create(materialData, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("DB:createTasks My material data", data, "______");
      cb(data);
    }
  });
};

// let myHTMLBasic = cb => {
//   db.myHTMLBasic.create(myHTMLBasic, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       console.log("DB:createTasks My material data2", data, "______");
//       cb(data);
//     }
//   });
// };
// end of enter the data from the const to data base

// Get function to show my function
let getMaterial = cb => {
  db.material.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("DB:Get material data:", data);
      cb(data);
    }
  });
};

// let getMaterialHTMLBasic = cb => {
//   db.myHTMLBasic.find({}, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       console.log("DB:Get material data2:", data);
//       cb(data);
//     }
//   });
// };
//end of get function

// example of module.export
module.exports = {
  myMaterial,
  getMaterial
  // myHTMLBasic,
  // getMaterialHTMLBasic
};
