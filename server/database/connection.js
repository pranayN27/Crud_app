const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongo connection string
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      keepAlive: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected : $ {con.connection.host}");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
