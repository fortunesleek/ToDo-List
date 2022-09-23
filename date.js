
module.exports = getDate;

function getDate() {

let today = new Date();
// var currentDay = today.getDay();
// var day = "";
let options = {
  weekday:"long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-US", options)
return day;
}
