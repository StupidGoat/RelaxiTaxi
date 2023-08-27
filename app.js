const express = require("express");
const Process = require("process");
const app = express();
const PORT = Process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hey user! ");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Connected To ${PORT}");
    });
  } catch (error) {
    console.log("error here in RootPage : ", error);
  }
};

start();
