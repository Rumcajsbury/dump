import { Item } from "../Item";
import { ICartItem } from "./types";

export class CartItem implements ICartItem {
  readonly item: Item;
  private _quantity: number;

  constructor(item: Item) {
    this.item = item;
    this._quantity = 1;
  }

  set quantity(newQuantity: number) {
    //walidajca na qauantity
    this._quantity = newQuantity;
  }

  get quantity() {
    return this._quantity;
  }
}
