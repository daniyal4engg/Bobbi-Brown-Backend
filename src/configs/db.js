const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://daniyal:daniyal123@bobbi-brown-backend.1ae46.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
