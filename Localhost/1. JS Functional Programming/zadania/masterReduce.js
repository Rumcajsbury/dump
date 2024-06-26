import { isArgumentArray, isFunction } from "../../utils/utils.js";

function mapFn(array, callback) {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  return array.reduce((accumulator, currentValue, currentIndex) => {
    const result = callback(currentValue, currentIndex, array);
    return accumulator.concat(result);
  }, []);
}

function filterFn(array, callback) {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  return array.reduce((accumulator, currentValue, currentIndex) => {
    if (callback(currentValue, currentIndex, array))
      accumulator = [...accumulator, currentValue];

    return accumulator;
  }, []);
}

// sprawdz jak dziala natywny, zweryfikuj i napraw by dzialal jak natywny
function everyFn(array, callback) {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  const copiedArray = array.slice();

  const result = copiedArray.reduce(
    (accumulator, currentValue, index, array) => {
      const result = callback(currentValue, index, array);
      if (!result) {
        copiedArray.splice();
        return false;
      }

      return accumulator;
    },
    true
  );

  return result;
}

// sprawdz jak dziala natywny, zweryfikuj i napraw by dzialal jak natywny
function someFn(array, callback) {
  validateIsValueArray(array);
  validateIsValueFunction(callback);

  const copiedArray = array.slice();

  const result = copiedArray.reduce(
    (accumulator, currentValue, index, array) => {
      const result = callback(currentValue, index, array);
      if (result) {
        copiedArray.splice();
        return true;
      }

      return accumulator;
    },
    false
  );

  return result;
}

function validateIsValueArray(value) {
  const isAnArray = isArgumentArray(value);
  if (!isAnArray) throw Error("Given argument is not an array.");
}

function validateIsValueFunction(value) {
  const isValueFunction = isFunction(value);
  if (!isValueFunction) throw Error("Given argument is no a function");
}

const testArray = [1, 2, 3, 4, 5];

const result = everyFn(testArray, (value) => value !== 2);
console.log(result);
console.log(testArray);

const result1 = someFn(testArray, (value) => value ===1);
console.log(result1);
