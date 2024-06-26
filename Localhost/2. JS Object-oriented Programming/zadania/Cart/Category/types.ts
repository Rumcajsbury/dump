import { Item } from "../Item";

export interface ICategory {
  uuid: string;
  name: string;
  categoryItems: Item[];
  addItemToCategory(item: Item): void;
  removeItemFromCategory(item: Item): void;
}
