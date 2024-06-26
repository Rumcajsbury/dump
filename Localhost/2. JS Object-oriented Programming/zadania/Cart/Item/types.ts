import { Category } from "../Category";

export interface IItem {
  uuid: string;
  name: string;
  category: Category | null;
  price: number;
  percentageDiscount: number;
}

    // Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
    // Ma umożliwiać: 
    // - określać jego rabat procentowy
    // - dodawać produkt do kategorii
    // - zmianę nazwy, ceny lub rabatu
// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
