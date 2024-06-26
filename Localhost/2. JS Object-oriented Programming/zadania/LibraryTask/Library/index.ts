import { IBook } from "../Book.ts/types";
import { IBooking } from "../Booking/types";
import { IUser } from "../User/types";
import { ILibrary, ILibraryBook } from "./types";

class Library implements ILibrary {
  private _allBooks: ILibraryBook[] = [];
  availableBooks: ILibraryBook[] = [];
  bookings: IBooking[] = [];
  private _users: IUser[] = [];

  get allBooks(): ILibraryBook[] {
    return this._allBooks;
  }

  get users(): IUser[] {
    return this._users;
  }

  addBookToLibrary(book: IBook): void {
    const libraryBookIndex = this._allBooks.findIndex(
      (libraryBook) => libraryBook.book.uuid === book.uuid
    );
    const doesBookExistInLibrary = libraryBookIndex >= 0;

    if (doesBookExistInLibrary) {
      const libraryBook = this._allBooks[libraryBookIndex];
      const updatedLibraryBook: ILibraryBook = {
        ...libraryBook,
        quantity: (libraryBook.quantity += 1),
      };
      const newAllBooks = [...this._allBooks];
      newAllBooks[libraryBookIndex] = updatedLibraryBook;

      this._allBooks = newAllBooks;

      return;
    }

    const newLibraryBook: ILibraryBook = { book, quantity: 1 };
    this._allBooks = [...this._allBooks, newLibraryBook];
  }

  removeBookFromLibrary(book: IBook): void {
    const indexOfLibraryBook = this._allBooks.findIndex(
      (libraryBook) => libraryBook.book.uuid === book.uuid
    );

    const doesBookExistInLibrary = indexOfLibraryBook >= 0;

    if (!doesBookExistInLibrary)
      throw new Error("Given book does not exist in library.");

    this._allBooks = [
      ...this._allBooks.slice(0, indexOfLibraryBook),
      ...this._allBooks.slice(indexOfLibraryBook + 1),
    ];
  }

  rentBooksToUser(books: IBook[], user: IUser): void {
    throw new Error("Method not implemented.");
  }

  returnUsersBooks(user: IUser): void {
    const libraryUser = this._users.find(libraryUser=> libraryUser.uuid===user.uuid);

    if(!libraryUser) throw new Error("User does not exists in library.")

      const userBooking = this.bookings.find(booking => booking.user.uuid === user.uuid);
    

  }

  addUserToLibrary(user: IUser): void {
    this._users = [...this._users, user];
  }

  removeUserFromLibrary(user: IUser): void {
    const indexOfUser = this._users.findIndex(
      (libraryUser) => libraryUser.uuid === user.uuid
    );

    const doesUserExist = indexOfUser >= 0;

    if (!doesUserExist) throw new Error("User does not exist in library.");

    this._users = [
      ...this._users.slice(0, indexOfUser),
      ...this._users.slice(indexOfUser + 1),
    ];
  }
  // Ma miec: listę książek, listę książek dostępnych (które nie zostały wypożyczone),
  // lista wypożyczeń, lista użytkowników
  // Ma umożliwiać:
  // - dodawanie książek do listy
  // - usuwanie książek z listy
  // - wypożyczanie książki dla usera X
  // - oddanie wypożyczania książki
}
