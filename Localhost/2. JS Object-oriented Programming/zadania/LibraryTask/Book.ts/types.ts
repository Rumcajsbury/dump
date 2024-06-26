export interface IBook {
  uuid: string;
  title: string;
  author: string;
  description: string;
  photoUrl: string;
}

export type BookModel = Omit<IBook, "uuid" | "photoUrl">;
