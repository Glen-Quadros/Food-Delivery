import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@project.wo4jdxq.mongodb.net/${process.env.DB_NAME}`,
    )
    .then(() => console.log("DB Connected"));
};
