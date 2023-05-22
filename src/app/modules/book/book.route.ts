import express from "express";
import { getBooks, getBooksByGenre } from "./book.controller";

const router = express.Router();

/* =============== Routes =============== */
router.get("/", getBooks);
// Task 2: Get books by genre
router.get("/genre-fantasy", getBooksByGenre);

export default router;
