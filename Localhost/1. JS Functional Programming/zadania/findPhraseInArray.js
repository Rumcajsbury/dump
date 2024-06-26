import {
  isArgumentArray,
  isArrayLengthGreaterThanZero,
  isValueString,
} from "../../utils/utils.js";
const inputData = [
  "stwórz",
  "sobie",
  "tutaj",
  "więcej",
  "wyrazów",
  "TUTAJ",
  "sobota",
];
//TODO ŁADNIEJ NAPISAC
const findPhraseInArray = (array, phrase) => {
  const isFirstArgumentAnArray = isArgumentArray(array);
  if (!isFirstArgumentAnArray) throw Error("First argument is not an array");

  const isFirstArgumentArrayLengthGreatherThanZero =
    isArrayLengthGreaterThanZero(array);
  if (!isFirstArgumentArrayLengthGreatherThanZero)
    throw "First argument array length is not greather than zero.";

  isValueString(phrase);

  const lowerCasePhrase = phrase.toLowerCase();
  const regexPhrase = new RegExp(lowerCasePhrase);

  const foundPhrasesFromArray = array.reduce(
    (accumulator, currentValue, index) => {
      const lowerCaseCurrentValue = currentValue.toLowerCase();

      const isCurrentvalueContainignPhrase = regexPhrase.test(lowerCaseCurrentValue); //znajdz za pomocom regexp phrase

      return isCurrentvalueContainignPhrase
        ? [...accumulator, [index, currentValue]]
        : accumulator;
    },
    []
  );

  const isFoundPhrasesArrayLenghtGreaterThanZero = isArrayLengthGreaterThanZero(
    foundPhrasesFromArray
  );

  if (!isFoundPhrasesArrayLenghtGreaterThanZero)
    return "There is no such phrase in array.";

  return foundPhrasesFromArray;
};

const result = findPhraseInArray(inputData, "sob");
console.log(result);
// result ===
//   [
//     [2, "tutaj"],
//     [5, "TUTAJ"],
//   ];
