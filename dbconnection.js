const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const ObjectID = require("mongodb").ObjectID;



app.use(function(req, res, next) {
  res.status(404).render("404", { url: req.url });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});