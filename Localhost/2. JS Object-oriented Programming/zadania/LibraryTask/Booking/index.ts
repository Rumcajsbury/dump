import { v4 } from "uuid";
import { IBook } from "../Book.ts/types";
import { IUser } from "../User/types";
import { IBooking, IEndOfRental, IRentedBook } from "./types";

export class Booking implements IBooking {
  readonly uuid: string;
  readonly user: IUser;
  readonly rentalDate: Date;
  readonly returnDate: Date;
  private _rentedBooksList: IRentedBook[] = [];
  private _penalty: number = 0;
  readonly dayPenaltyValue: number = 10;
  private _bookingFinished: boolean = false;

  constructor(user: IUser) {
    this.uuid = v4();
    this.user = user;

    const today = new Date();
    this.rentalDate = today;

    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    this.returnDate = nextWeek;
  }

  get rentedBooksList(): IRentedBook[] {
    return this._rentedBooksList;
  }

  get penalty(): number {
    return this._penalty;
  }

  get bookingFinished(): boolean {
    return this._bookingFinished;
  }

  addBookToRent(book: IBook): void {
    const existingBookIndex = this.findExistingBookIndex(book);

    const doesBookExist = existingBookIndex >= 0;

    if (doesBookExist) {
      const newRentedBooksList = [...this._rentedBooksList];

      const exisitngBook = this._rentedBooksList[existingBookIndex];

      newRentedBooksList[existingBookIndex] = {
        ...exisitngBook,
        quantity: (exisitngBook.quantity += 1),
      };

      this._rentedBooksList = newRentedBooksList;
      return;
    }

    this._rentedBooksList = [
      ...this._rentedBooksList,
      { uuid: v4(), bookType: book, quantity: 1 },
    ];
  }

  removeBookFromRent(book: IBook): void {
    const existingBookIndex = this.findExistingBookIndex(book);

    const doesBookExist = existingBookIndex >= 0;

    if (!doesBookExist)
      throw new Error("This book does not exist in rental list.");

    const rentalBook = this._rentedBooksList[existingBookIndex];
    const isMoreThanOneBookOfType = rentalBook.quantity > 1;

    if (!isMoreThanOneBookOfType) {
      this._rentedBooksList = [
        ...this._rentedBooksList.slice(0, existingBookIndex),
        ...this._rentedBooksList.slice(existingBookIndex + 1),
      ];

      return;
    }

    const updatedRentalBook = {
      ...rentalBook,
      quantity: (rentalBook.quantity -= 1),
    };
    const newRentalBookList = [...this._rentedBooksList];
    newRentalBookList[existingBookIndex] = updatedRentalBook;

    this._rentedBooksList = newRentalBookList;
  }

  returnBooks(): IEndOfRental {
    this.calculatePenalty();
    this._bookingFinished = true;

    return { penalty: this._penalty, books: [...this.rentedBooksList] };
  }

  private findExistingBookIndex(book: IBook): number {
    const existingBookIndex = this._rentedBooksList.findIndex(
      (rentedBook) => rentedBook.bookType.uuid === book.uuid
    );

    return existingBookIndex;
  }

  private calculatePenalty() {
    const dyasDifference = this.getDaysDifference();

    if (dyasDifference >= 1) {
      this._penalty = dyasDifference * this.dayPenaltyValue;
    }

    return this.penalty;
  }

  private getDaysDifference(): number {
    const startMilliseconds = this.returnDate.getTime();
    const endMilliseconds = new Date().getTime();

    const differenceMilliseconds = endMilliseconds - startMilliseconds;

    const differenceDays = Math.ceil(
      differenceMilliseconds / (1000 * 60 * 60 * 24)
    );

    return differenceDays;
  }
}
