//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const app = express();

let items = [ "Buy Food","Cook Food","Eat Food" ];
let workItems = [];

app.set('view engine', 'ejs');

app.use (bodyParser.urlencoded({extended:true}));
app.use (express.static("public"));

app.get("/", (req, res) => {

let day = date();

  res.render('list', {
    listTitle: day,
    newListItem: items
  });

});

app.get("/work",(req,res) => {
  res.render('list', {listTitle:"Work List", newListItem: workItems});
});

app.post("/work",(req,res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.post ("/", (req, res) => {
  let item = req.body.newItem;

  items.push(item)

  res.redirect('/');
})

app.listen(3000, () => {
  console.log("Server 3000 is Up and Running");
})
