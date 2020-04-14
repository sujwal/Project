const express = require('express')
const port = process.env.PORT || 3000
//require('dotenv').config()
const app = express()
//mongoose.Promise = global.Promise;
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true});


//app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Set up default mongoose connection
//var mongoDB = process.env.MONGO_CONNECT_URI
var mongoDB = 'mongodb+srv://mongo:P&N/,eqCtR99h+9@cluster0-jgw2s.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('public'))
app.set('view engine','pug')

app.get('/', (req, res) => {
  res.render('index', {});
});
app.get('/index', (req, res) => {
  res.render('index', {});

});
app.get('/register', (req, res) => {
  res.render('register',{})
});
app.get('/signin', (req, res) => {
  res.render('signin',{})
});


app.get('/contact', (req,res) =>{
  res.render('contact',{})
});





app.post("/register", urlencodedParser, (req, res) => {
  var myData = new NewcomerModel(req.body);
  myData.save()
    .then(item => {
      res.redirect("/")
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
app.post("/signin", urlencodedParser, (req, res) => {
  var myData = new RenewModel(req.body);
  myData.save()
    .then(item => {
      res.redirect("/")
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})