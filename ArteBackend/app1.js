const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/postSchema');
const app = express();

mongoose.connect("mongodb+srv://user:user@maindatabase-qpzwn.mongodb.net/postsdb?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true
}).then(() => {
  console.log("connected to DB");
}).catch(() => {
  console.log("connection failed");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  // const post = req.body;
  console.log(post);
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/posts", (req, res, next) => {
  Post.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  }).catch(error => {
    console.log(error);
  });
  // const posts = [
  //   {
  //     id: "fadf12421l",
  //     title: "First server-side post",
  //     content: "This is coming from the server"
  //   },
  //   {
  //     id: "ksajflaj132",
  //     title: "Second server-side post",
  //     content: "This is coming from the server!"
  //   }
  // ];

});
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Posts fetched successfully!",
  });
});

app.delete("/posts/:id", (req, res, next) => {
  console.log(req.params.id+` is going to be deleted`)
  res.status(200).json({ message: "this post is about to be deleted"})
})
module.exports = app;