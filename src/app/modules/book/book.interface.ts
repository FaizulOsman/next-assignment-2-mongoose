export interface IBook {
  //   id?: string;
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
