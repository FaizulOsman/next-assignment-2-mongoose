import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const getBookFromDB = async (): Promise<IBook[]> => {
  const books = await Book.find();

  return books;
};
