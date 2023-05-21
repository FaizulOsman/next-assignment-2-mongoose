import express from "express";
import { getBooks } from "./book.controller";

const router = express.Router();

// Routes
router.get("/", getBooks);

export default router;
