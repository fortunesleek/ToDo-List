const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

  var today = new Date();
  var currentDay = today.getDay();
  // var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = "";

  // First preferred method
  // if (currentDay === 6 ) {
    // || currentDay === 0
    // day = "weekend";
  // } else {
    // day = weekday[today.getDay()];
  // }

  // Second preferred method

  switch (currentDay) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday"
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Cordobog";
      break;
    case 4:
      day = "Thursday";
    break;
    case 5:
      day = "Friday";
    break;
    case 6:
      day = "Saturday";
    break;
    default:
    console.log("WTF" +currentDay);
  }

  res.render("list", {kindOfDay: day});
  // res.send();
})

app.listen(3000, () => {
  console.log("Server on port 3000 is alive and well");
})
