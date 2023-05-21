const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/book");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}
main();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
