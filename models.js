const mongoose = require("mongoose");


const FruitSchema = new mongoose.Schema(
  {
    name:String,
    rating:Number
  }
);

const Fruit= mongoose.model("Fruit", FruitSchema);

const fruit= new Fruit({
  name:"mango",
  rating:9
})

fruit.save();

module.exports = Fruit;