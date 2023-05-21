import app from "./app";
import mongoose from "mongoose";

const port: number = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/book");
    console.log("Database Connected");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
