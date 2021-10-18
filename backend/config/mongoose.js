require("dotenv").config();
const mongoose = require("mongoose");

const password = process.env.PASSWORD; // fetching PASSWORD from .env file
// connecting to mongoDB
mongoose.connect(
  `mongodb+srv://Admin-Atif:${password}@cluster0.lymyd.mongodb.net/internProject?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;