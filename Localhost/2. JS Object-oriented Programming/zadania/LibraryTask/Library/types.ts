import { IBook } from "../Book.ts/types";
import { Booking } from "../Booking";
import { IBooking } from "../Booking/types";
import { IUser } from "../User/types";

export interface ILibrary {
  allBooks: ILibraryBook[];
  availableBooks: ILibraryBook[];
  bookings: IBooking[];
  users: IUser[];

  addBookToLibrary(book: IBook): void;
  removeBookFromLibrary(book: IBook): void;
  rentBooksToUser(books: IBook[], user: IUser): void;
  returnUsersBooks(user: IUser): void;
  addUserToLibrary(user: IUser): void;
  removeUserFromLibrary(user: IUser): void;
}

export interface ILibraryBook {
  book: IBook;
  quantity: number;
}
