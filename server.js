const http = require('http'),
     express = require('express'),
     app = express();
     mongoose    = require("mongoose"),
     initApp = require('./ArteBackend/app'),
     bodyParser = require('body-parser'),
     port = process.env.PORT || 3000,
     debug = require('debug')('node-angular');

// app.set('port',);
const server = http.createServer(app);

app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));


mongoose.connect("mongodb+srv://user:user@maindatabase-qpzwn.mongodb.net/postsdb?retryWrites=true&w=majority",{
  useUnifiedTopology:true,
  useFindAndModify:false
  }).then(() => {
  console.log("connected to DB");
}).catch(() => {
  console.log("connection failed");
})

app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log("working");
    next();
})

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use((req, res, next)=>{
//     res.send("hello")
// })
initApp(app);

app.listen(port, ()=>{
    console.log(`server Up on port ${port}`);
});