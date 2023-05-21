import { NextFunction, Request, Response } from "express";
import { getBookFromDB } from "./book.service";

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
