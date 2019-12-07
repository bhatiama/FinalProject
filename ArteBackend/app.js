const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user:user@maindatabase-qpzwn.mongodb.net/tododb?retryWrites=true&w=majority",{
  useUnifiedTopology:true,
  useFindAndModify:false
  }).then(() => {
  console.log("connected to DB");
}).catch(() => {
  console.log("connection failed");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));