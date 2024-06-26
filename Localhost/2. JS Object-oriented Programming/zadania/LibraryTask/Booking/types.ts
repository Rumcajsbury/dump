import { IBook } from "../Book.ts/types";
import { IUser } from "../User/types";

export interface IBooking {
  uuid: string;
  user: IUser;
  rentalDate: Date;
  returnDate: Date;
  rentedBooksList: IRentedBook[];
  penalty: number;
  dayPenaltyValue: number;
  bookingFinished: boolean;

  addBookToRent(book: IBook): void;
  removeBookFromRent(book: IBook): void;
  returnBooks(): IEndOfRental;
}

export interface IRentedBook {
  uuid: string;
  bookType: IBook;
  quantity: number;
}

export interface IEndOfRental {
  books: IRentedBook[];
  penalty: number;
}
