import { ISwitch } from "./types";

// interface Condition {
//   name: string,
//   formula: Function,
//   result: boolean;
// }

class Switch implements ISwitch {
  private cases: (() => void)[];
  private conditions: boolean[];

  constructor() {
    this.cases = [];
    this.conditions = [];
  }

  add(condition: boolean, callback: () => void): void {
    // .slice()
    this.conditions.push(condition)
    this.conditions = [...this.conditions, condition];
    this.cases = [...this.cases, callback];
  }

  isValid(): boolean {
    let areCasesValid = true;
    for (const index in this.conditions) {
      const condition = this.conditions[index];

      if (condition) {
        areCasesValid = false;
        this.cases[index]();
      }
    }

    return areCasesValid;
  }

  isEmpty(): boolean {
    const isCasesEmpty = this.cases.length === 0;
    const isConditionsEmpty = this.conditions.length === 0;
    const areArraysEmpty = isCasesEmpty && isConditionsEmpty;

    return areArraysEmpty;
  }
}

// - [ ] Metoda .isValid zwraca true jeśli wszystkie warunki będą na false. Jeżeli jakikolwiek warunek zostanie spełniony, funkcja przerywa swoje działanie, wywołując przekazany callback dla tego warunku. Po każdym wykonaniu metody warunki i callbacki są czyszczone.

// ## Cele opcjonalne do wykonania
// // class Switch {
//   cases = [];
//   conditions = [];

//   add(condition, callback) {}
//   isValid() {
//     // return this.conditions
//   }
// }

// // ma to działać tak:
const formChecker = new Switch();
const value = "test";
const check1 = () => {
  console.error("value is too short");
};

const check = value.length < 5;
formChecker.add(value.length < 5, () => {
  console.error("value is too short");
});

formChecker.add(!value.includes("@"), () => {
  console.error("value is not an email");
});

// formChecker.isEmpty() === false
const result = formChecker.isValid(); // === false
console.log(result);
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.isEmpty() === true
