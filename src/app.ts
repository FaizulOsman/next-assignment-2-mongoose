import cors from "cors";
import express, { Application } from "express";
import bookRoutes from "./app/modules/book/book.route";

const app: Application = express();

// using cors
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// parse data
app.use(express.json());

// Book route
app.use("/api/v1/book", bookRoutes);

export default app;
