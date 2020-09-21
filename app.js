const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.json());
// res.json(req.body));

const postRoute = require("./routes/post");

app.use("/posts", postRoute);

// connet to bd
// mongoose.connect(
//   process.env.DB_CONNECTION,

//   { useNewUrlParser: true, useUnifiedTopology: true },

//   () => console.log("connected")
// );

app.listen(3000, () => console.log("3000"));
