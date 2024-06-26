import { IItem } from "../Item";

export interface ICartItem {
  uuid: string;
  item: IItem;
  quantity: number;
  price: number;
}
