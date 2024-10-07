const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/testdb');


const Nameschema = new mongoose.Schema(
  {
    name: String,
    phone: Number
  }
);

const Name = mongoose.model("names", Nameschema);

const name = new Name({
  name: "Ninja"
}
)
name.save();


