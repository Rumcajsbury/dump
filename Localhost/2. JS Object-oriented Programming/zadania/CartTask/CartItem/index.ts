import { v4 } from "uuid";
import { IItem } from "../Item";
import { ICartItem } from "./types";

export class CartItem implements ICartItem {
  readonly uuid: string;
  readonly item: IItem;
  private _quantity: number;

  constructor(item: IItem) {
    this.uuid = v4();
    this.item = item;
    this._quantity = 1;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    //walidacja
    this._quantity = value;
  }

  get price(): number {
    return this._quantity * this.item.finalPrice;
  }
}
