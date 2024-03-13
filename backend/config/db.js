const mongoose = require("mongoose");
// require('dotenv').config({ path: 'ENV_FILENAME' });
const connectDB = async () => {

    try {
      const mongoURI =
        process.env.MONGO_URI ||
        "mongodb+srv://thakurpintuji:Pintunitk2023@cluster0.lmnqa7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });

      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit();
  }
};


module.exports = connectDB;