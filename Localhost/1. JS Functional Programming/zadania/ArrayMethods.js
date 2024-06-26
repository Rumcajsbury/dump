import { isArgumentArray, isFunction } from "../../utils/utils.js";

const forEachFn = (array, callback) => {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  for (const index in array) {
    callback(array[index], index, array);
  }
};

const mapFn = (array, callback) => {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  const mappedArray = [];

  for (const index in array) {
    const result = callback(array[index], index, array);
    mappedArray.push(result);
  }

  return mappedArray;
};

// arr.map((element, index, array) => {})
// vs
// mapFn(arr, (element, index, array) => {})

const entriesFn = (array) => {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  let index = 0;

  return {
    next() {
      const isIndexLessThanArrayLenght = index < array.length;
      if (isIndexLessThanArrayLenght) {
        return { value: [index, array[index++]], done: false };
      } else {
        return { done: true };
      }
    },
  };
};

const filterFn = (array, callback) => {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  const filteredArray = [];

  for (const index in array) {
    const element = array[index];
    const result = callback(element, index, array);
    if (result) filteredArray.push(element);
  }

  return filteredArray;
};

// jak dziala reduce ( 2 scenariusze )
//TODO
const reduceFn = (array, callback, initialValue) => {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  const arrayLength = array.length;
  const isArrayEmpty = arrayLength === 0;
  const isInitialvalueProvided = initialValue !== undefined;

  if (isArrayEmpty) {
    if (isInitialvalueProvided) return initialValue;

    // if (!isInitialvalueProvided)
      throw new Error(
        "Cannot use reduce with empty array and no initialValue."
      );
  }

  const doesArrayContainOneElement = arrayLength === 1;
  if (doesArrayContainOneElement && !isInitialvalueProvided) return array[0];

  let accumulator = isInitialvalueProvided ? initialValue : array[0];
  const startIndex = isInitialvalueProvided ? 0 : 1;

  // for const of -> dzialam na tablciy
  //DONE
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};

const everyFn = (array, callback) => {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  for (const index in array) {
    const result = callback(array[index], index, array);
    if (!result) return false;
  }

  return true;
};

const someFn = (array, callback) => {
  for (const index in array) {
    if (callback(array[index], index, array)) return true;
  }

  return false;
};

function validateIsValueArray(value) {
  const isAnArray = isArgumentArray(value);
  if (!isAnArray) throw Error("Given argument is not an array.");
}

function validateIsValueFunction(value) {
  const isValueFunction = isFunction(value);
  if (!isValueFunction) throw Error("Given argument is no a function");
}

// ## Cele główne

// - [ ] Napisz funkcje, w których wykorzystasz pętle for lub while w celu odwzorowania podanych niżej metod tablicowych:
// - [ ] .forEach
// - [ ] .map
// - [ ] .entries
// - [ ] .filter
// - [ ] .reduce
// - [ ] .every
// - [ ] .some

// ## Przydatne linki

// - Array methods w JS - https://medium.com/quick-code/understanding-js-array-methods-which-can-make-programming-not-so-overwhelming-for-beginners-7afb5b4a0967
// - Funkcja w JS - https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99?gi=43b26b329212

const array1 = [1, 2, 3, 4];
const result = forEachFn(array1, (item) => {
  return item * 2;
});
console.log(result);
console.log(array1);

const result2 = reduceFn(
  array1,
  (accumulator, currentValue) => accumulator + currentValue * 2
);

console.log(result2, "reduce");

const result1 = someFn(array1, (item) => item > 2);
console.log(result1);

let array2 = ["a", "b", "c"];

const iterator1 = array2.entries();
console.log(iterator1);

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

array2[1] = "d";
console.log(iterator1.next().value);

