const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("es.body");
});

router.post("/", async (res, req) => {
  console.log(req.body);
  // const newP = new Post({
  //   title: req.body.title,
  //   desc: req.body.desc,
  // });
  // try {
  //   const a = await newP.save();
  //   res.json(a);
  // } catch (err) {
  //   console.log(err, "aef");
  //   res.send(err);
  // }
});




// router.post( "/", async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//       //create new user
//       user = new User({ name, email, password });
//       await user.save();
//       console.log(user);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server error");
//     }
//   }
);
module.exports = router;
