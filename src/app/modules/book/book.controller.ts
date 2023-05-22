import { NextFunction, Request, Response } from "express";
import {
  getBookFromDB,
  getBookByGenreFromDB,
  getBooksByGenreAndPublisherFromDB,
  updatePriceStrToIntToDB,
} from "./book.service";

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

// Task 3: Get books by genre and publisher
export const getBooksByGenreAndPublisher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await getBooksByGenreAndPublisherFromDB();

  res.status(200).json({
    status: "success",
    data: book,
  });
};

// Task 5: Update price string to integer
export const updatePriceStrToInt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await updatePriceStrToIntToDB();

  res.status(200).json({
    status: "success",
    data: book,
  });
};
