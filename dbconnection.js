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

//
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'users'

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
    if(error) {
        return console.log('Unable to connet to DB')
    }
    console.log('Connected successfully!!!')
})//