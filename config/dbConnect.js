import mongoose from "mongoose";
import { log } from "../utils";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    log.info("Connected to database");
  } catch (error) {
    log.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
