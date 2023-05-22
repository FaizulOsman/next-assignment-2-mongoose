import express from "express";
import {
  getBooks,
  getBooksByGenre,
  getBooksByGenreAndPublisher,
} from "./book.controller";

const router = express.Router();

/* =============== Routes =============== */
router.get("/", getBooks);
// Task 2: Get books by genre
router.get("/genre", getBooksByGenre);
// Task 3: Get books by genre and publisher
router.get("/genre-publisher", getBooksByGenreAndPublisher);

export default router;
