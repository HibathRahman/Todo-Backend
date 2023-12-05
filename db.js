// const mongoDBURL =
//   "mongodb+srv://mhibath1:clusterhibath@cluster0.ekpvyls.mongodb.net/TodoApp?retryWrites=true&w=majority";

// module.exports = mongoDBURL;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MondoDb_Url);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
