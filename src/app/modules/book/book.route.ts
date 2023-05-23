import express from "express";
import {
  getBooks,
  getBooksByGenre,
  getBooksByGenreAndPublisher,
  updatePriceStrToInt,
  addFeatured,
} from "./book.controller";

const router = express.Router();

/* =============== Routes =============== */
router.get("/", getBooks);
// Task 2: Get books by genre
router.get("/genre", getBooksByGenre);
// Task 3: Get books by genre and publisher
router.get("/genre-publisher", getBooksByGenreAndPublisher);
// Task 4: static method => featured: "BestSeller" or "Popular"
router.get("/add-featured", addFeatured);
// Task 5: Update Book price string to integer
router.put("/update-str-to-int", updatePriceStrToInt);

export default router;
