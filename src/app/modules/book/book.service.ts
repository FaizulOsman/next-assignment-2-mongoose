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
