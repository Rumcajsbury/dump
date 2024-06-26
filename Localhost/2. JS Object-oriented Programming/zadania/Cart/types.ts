import { CartItem } from "./CartItem";

 export interface ICart{
    uuid:string;
    itemsList:CartItem[];
    cartPercentageDiscount:number;
    

 }
 // Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
    // Ma umożliwiać: 
    // - dodawanie/usuwanie przedmiotów do/z koszyka
    // - zmianę ilości produktu w koszyku
    // - podliczać wartość koszyka uwzględniajac rabaty