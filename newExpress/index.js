var express = require("express");
var app = express();

var bodyParser = require("body-parser");

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("e");
});

// app.post("/", (req, res) => {
//   res.send("post");
// });

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("I a, ");
});
app.listen(4000, () => console.log("connected"));
