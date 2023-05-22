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

// Task 5: Update price string to integer
export const updatePriceStrToIntToDB = async () => {
  const books = await Book.updateMany({}, [
    {
      $set: {
        price: { $toInt: "$price" },
      },
    },
  ]);

  return books;
};
