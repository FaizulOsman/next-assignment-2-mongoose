import { Schema, model } from "mongoose";
import { BookModel, IBook, IBookMethods } from "./book.interface";

// Create Book Schema
export const bookSchema = new Schema<IBook, BookModel, IBookMethods>({
  // id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    type: {
      name: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  reviews: [
    {
      type: {
        user: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
  ],
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

// Task 4: static method => featured: "BestSeller" or "Popular"
bookSchema.static("addFeatured", async function addFeatured() {
  // filter all data by (rating > 4)
  const filter = { rating: { $gte: 4 } };
  // Update for BestSeller
  const update = {
    $set: {
      featured: "Popular",
    },
  };
  const featuredBooks = await this.collection.updateMany(filter, update);
  // Update for BestSeller
  const filter2 = { rating: { $gte: 4.5 } };
  const update2 = {
    $set: {
      featured: "BestSeller",
    },
  };
  const featuredBooks2 = await this.collection.updateMany(filter2, update2);

  return [featuredBooks, featuredBooks2];
});

export const Book = model<IBook, BookModel>("Book", bookSchema);
