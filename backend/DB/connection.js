import mongoose from "mongoose";

export const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected:", conn.connection.host);
  } catch (error) {
    console.log("Error while connecting to the database", error.message);
    process.exit(1);
  }
};
