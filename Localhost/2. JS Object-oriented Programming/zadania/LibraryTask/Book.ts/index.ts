import { v4 } from "uuid";
import { BookModel, IBook } from "./types";
import { PhotoUrlGenerator } from "../PhotoUrlGenerator";
import { ValidationHelper } from "../../utils/ValidatorHelper";

export class Book implements IBook {
  readonly uuid: string;
  readonly title: string;
  readonly author: string;
  readonly description: string;
  readonly photoUrl: string;

  constructor(bookModel: BookModel) {
    const { title, author, description } = bookModel;

    ValidationHelper.isStringOfMinRequiredLength(title, 2);
    ValidationHelper.isStringOfMinRequiredLength(author, 2);
    ValidationHelper.isStringOfMinRequiredLength(description, 2);
    ValidationHelper.isStringLessThanMaxLength(description, 50);

    this.uuid = v4();
    this.title = title;
    this.author = author;
    this.description = description;
    this.photoUrl = PhotoUrlGenerator.getPhotoUrl();
  }
}
