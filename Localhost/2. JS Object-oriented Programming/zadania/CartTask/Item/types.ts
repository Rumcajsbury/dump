import { v4 } from "uuid";
import { IItem, ItemModel } from ".";

export class Item implements IItem {
  readonly uuid: string;
  private _name: string;
  private _category: string;
  private _basePrice: number;
  private _discountPercetage: number;

  constructor(itemModel: ItemModel) {
    const { name, category, basePrice, discountPercetage } = itemModel;

    //walidacja

    this.uuid = v4();
    this._name = name;
    this._category = category;
    this._basePrice = basePrice;
    this._discountPercetage = discountPercetage ?? 0;
  }

  set name(value: string) {
    //walidajca
    this._name = value;
  }

  get name(): string {
    return this._name;
  }

  set discountPercetage(value: number) {
    //walidajca
    this._discountPercetage = value;
  }

  get discountPercetage(): number {
    return this._discountPercetage;
  }

  set basePrice(value: number) {
    //walidacja
    this._basePrice = value;
  }

  get basePrice(): number {
    return this._basePrice;
  }

  get finalPrice(): number {
    return 0;
  }

  set category(value: string) {
    //walidacja
    this._category = value;
  }

  get category(): string {
    return this._category;
  }
}

// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
