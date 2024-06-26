import { v4 } from "uuid";
import { Item } from "../Item";
import { ICategory } from "./types";

export class Category implements ICategory {
  readonly uuid: string;
  private _categoryItems: Item[];
  private _name: string;

  constructor(name: string) {
    //walidacja na name
    this.uuid = v4();
    this._name = name;
    this._categoryItems = [];
  }

  get name() {
    return this._name;
  }

  get categoryItems() {
    return [...this._categoryItems];
  }

  addItemToCategory(itemToAdd: Item): void {
    this._categoryItems = [...this.categoryItems, itemToAdd];
  }

  removeItemFromCategory(itemToRemove: Item): void {
    const index = this._categoryItems.findIndex(
      (item) => item.uuid === itemToRemove.uuid
    );

    if (!index) throw new Error("No such item in category.");

    this._categoryItems = [
      ...this._categoryItems.slice(0, index),
      ...this._categoryItems.slice(index + 1),
    ];
  }
}

const category = new Category("aa");
