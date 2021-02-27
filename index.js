console.log("RUNNING");

const express = require("express");
const cors = require("cors"); /// communicate 📶
// const morgan = require("morgan"); ///  logger 🔃
const helmet = require("helmet"); ///  for security 🔐

const app = express();

///  ==============   PARSING DATA FROM JSON
app.use(express.json());
app.use(cors());
// app.use(morgan("tiny"));
////===============  DEFAULT  PORT

const port = process.env.PORT;

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.post("/ping", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

///=====================  STARTING AND LISTINING
app.listen(port || 3000, function () {
  console.log("--------------------------------");
  console.log("--------------------------------");
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
  console.log("--------------------------------");
  console.log("--------------------------------");
  console.log("--------------------------------");
  console.log("--------------------------------");
});
