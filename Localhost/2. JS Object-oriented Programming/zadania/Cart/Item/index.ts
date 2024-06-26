import { v4 } from "uuid";
import { IItem } from "./types";
import { Category } from "../Category";

export class Item implements IItem {
  readonly uuid: string;
  private _name: string;
  private _category: Category | null = null;
  private _price: number;
  private _percentageDiscount: number;

  constructor(name: string, price: number, percentageDiscount: number) {
    //walidajca na name
    //walidajc na category
    //walidajc na price
    //walidajc na discountprice
    this.uuid = v4();
    this._name = name;
    this._price = price;
    this._percentageDiscount = percentageDiscount;
  }

  set name(newName: string) {
    //walidajca na name
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set price(newPrice: number) {
    //walidajca na price
    this._price = newPrice;
  }

  get price() {
    return this._price;
  }

  set percentageDiscount(newPercentageDiscount: number) {
    //walidajca na percentage disounct
    this._percentageDiscount = newPercentageDiscount;
  }

  get percentageDiscount() {
    return this._percentageDiscount;
  }

  get category(): Category | null {
    return this._category;
  }

  set category(category: Category) {
    this._category = category;
    category.addItemToCategory(this);
  }
}
