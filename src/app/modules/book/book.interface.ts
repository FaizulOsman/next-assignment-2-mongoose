import { HydratedDocument, Model } from "mongoose";

export interface IBook {
  // _id?: string;
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: {
    name: {
      type: String;
    };
    location: {
      type: String;
    };
  };
  reviews: [
    {
      user: {
        type: String;
      };
      comment: {
        type: String;
      };
    }
  ];
  rating: number;
  price: number | string;
}

export interface IBookMethods {
  featured(): any;
}

export interface BookModel extends Model<IBook, {}, IBookMethods> {
  addFeatured(): Promise<HydratedDocument<IBook, IBookMethods>>;
}
