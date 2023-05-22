import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const getBookFromDB = async (): Promise<IBook[]> => {
  const books = await Book.find();

  return books;
};

// Task 2: Get books by {genre: Fantasy}
export const getBookByGenreFromDB = async (): Promise<IBook[]> => {
  const books = await Book.aggregate([{ $match: { genre: "Fantasy" } }]);

  return books;
};

// Task 3: Get books by {genre: "Fantasy", publisher: "Roli Books"}
export const getBooksByGenreAndPublisherFromDB = async (): Promise<IBook[]> => {
  const books = await Book.aggregate([
    { $match: { genre: "Sci-Fi", "publisher.name": "Roli Books" } },
  ]);

  return books;
};

// Task 4: static method => featured: "BestSeller" or "Popular"
export const addFeaturedToDB = async () => {
  const addFeaturedUsingRating = await Book.aggregate([
    {
      $match: { rating: { $gte: 4 } },
    },
    {
      $addFields: {
        featured: {
          $cond: [{ $gte: ["$rating", 4.5] }, "BestSeller", "Popular"],
        },
      },
    },
  ]);
  return addFeaturedUsingRating;
};

// Task 5: Update price string to integer
export const updatePriceStrToIntToDB = async () => {
  const books = await Book.updateMany({ publicationYear: { $gt: 2020 } }, [
    {
      $set: {
        price: { $toInt: "$price" },
      },
    },
  ]);

  return books;
};
