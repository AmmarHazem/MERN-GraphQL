const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
    return true;
  } catch (e) {
    console.log("Error connecting to DB");
    console.log(e);
    return false;
  }
};

module.exports = connectDB;
