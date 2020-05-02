const bodyParser = require("body-parser");
const express = require("express");
require('dotenv').config();

const mainRouter = require("./routes/mainRouter");

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.disable("x-powered-by");
app.use(
  bodyParser.json({
    limit: "50mb"
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/", mainRouter);

app.use((req, res, next) => {
  res.status(404);
});

app.listen(port, () =>
  console.log(`The Web Server is Listening at http://${host}:${port}`)
);

module.exports = app;