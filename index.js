const express = require("express");
const Process = require("process");
const app = express();
const PORT = Process.env.PORT || 3000;
const mongoose = require("mongoose");
const {connectMongoDb} = require("./connection");
const {mongoUrl} = require("./keys");
const ApiRouters = require("./src/routes/router")
const bodyParser    = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Connection to MongoDb
connectMongoDb(mongoUrl);

// Adding Routers
app.use("/api", ApiRouters );

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Connected To ${PORT}");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

