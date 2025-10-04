import mongoose from "mongoose";

export const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected successfully ...");
  } catch (error) {
    console.log(error);
  }
};

const DATABASE_URL = process.env.DATABASE_URL || "";

connectDb(DATABASE_URL);
