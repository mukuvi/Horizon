import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected ...");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;

const deleteBD = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
  } catch (error) {
    console.log(error);
  }
};
