export interface IItem {
  uuid: string;
  name: string;
  category: string;
  basePrice: number;
  discountPercetage?: number;
  finalPrice: number;

  // Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
  // Ma umożliwiać:
  // - określać jego rabat procentowy
  // - dodawać produkt do kategorii
  // - zmianę nazwy, ceny lub rabatu
}

export type ItemModel = Omit<IItem, "uuid" | "finalPrice">;
