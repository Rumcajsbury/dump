import {
  isValidNumber,
  isArgumentArray,
  isNotNullOrUndefined,
} from "../../utils/utils";

function includes(array, elementToFind, fromIndex = 0) {
  const isFirstArgumentArray = isArgumentArray(array);
  if (!isFirstArgumentArray) throw Error("First argument is not an array.");

  const isElementToFindValid = isNotNullOrUndefined(elementToFind);
  if (!isElementToFindValid) throw Error("Element to find is not valid.");

  const isFromIndexValidNumber = isValidNumber(fromIndex);
  if (!isFromIndexValidNumber)
    throw Error("fromIndex argument is not a number.");

  const arrayLength = array.length;
  let realStartIndex = 0;

  const isFromIndexValueGreaterOrEuqalArrayLength = fromIndex >= arrayLength;
  const isFromIndexLessThanNegativeArrayLength = fromIndex < -arrayLength;
  const isFromIndexEuqalZero = fromIndex === 0;
  const isFromIndexGreaterOrEqualNegativeArrayLength =
    -arrayLength <= fromIndex;
  const isFromIndexLessThanZero = fromIndex < 0;

  if (isFromIndexValueGreaterOrEuqalArrayLength) return false;
  if (isFromIndexLessThanNegativeArrayLength || isFromIndexEuqalZero)
    realStartIndex = 0;
  if (isFromIndexGreaterOrEqualNegativeArrayLength && isFromIndexLessThanZero)
    realStartIndex = fromIndex + arrayLength;

  for (const i = realStartIndex; i <= arrayLength; i++) {
    const arrayElement = array[i];
    const isElementFound = arrayElement === elementToFind
    if (isElementFound) return true;

  }

  return false;
}

const testArray = [1, 2, 3, 4];
console.log(includes(testArray, 1, -5));
//WARUNKI DO ZMIENNYCH
