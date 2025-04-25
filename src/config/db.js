const mongoose = require("mongoose");
const logger = require("../utils/logger");
const dotenv = require("dotenv");

dotenv.config();


const connectionMongoDB = async () => {
  try {
    console.log("PROCESS ENV: ", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    logger.info("MongoDB Connected!");
  } catch (error) {
    logger.error("MongoDB No Connected: " + error.message);
    process.exit(1);
  }
};

module.exports = connectionMongoDB;
