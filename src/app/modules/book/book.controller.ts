import { NextFunction, Request, Response } from "express";
import { getBookFromDB, getBookByGenreFromDB } from "./book.service";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await getBookFromDB();

  res.status(200).json({
    status: "success",
    data: book,
  });
};

// Task 2: Get books by genre
export const getBooksByGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await getBookByGenreFromDB();

  res.status(200).json({
    status: "success",
    data: book,
  });
};
