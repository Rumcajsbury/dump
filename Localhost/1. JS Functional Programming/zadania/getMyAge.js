import {
  isPositiveNumber,
  isNotEmptyString,
  isEmptyString,
  isValidNumber
} from "../../utils/utils.js";

const date = new Date()
const qwe = input instanceof Date
const zxc = Object.prototype.toString.call(input) === '[object Date]'
const combined = qwe && zxc
// const asd = input instanceof Object


function getMyAge(input) {
  //walidajca na typy string, number, oraz Date object
  const inputType = typeof input;
  const isStringType = inputType === 'string'
  const isNumberType = inputType === 'number'
  const isDateType = input instanceof Date && Object.prototype.toString.call(input) === '[object Date]'
  const isInputTypeInValidTypes = isStringType || isNumberType || isDateType;
  if (!isInputTypeInValidTypes)
    throw Error("Input is not a string, number nor object.");


    const numberInput = isDateType ? input.getFullYear() :Number(input);
  // if (isDateType) {
  //   input.getFullYear()
  // }
  
  // if (isOneOfThePrimitiveTypes) {
  //   const numberInput = Number(input);
    isValidNumber(numberInput)
    //chechk for NAN
    //ispositive
  
      const isInputInteger = Number.isInteger(numberInput);
    if (!isInputInteger) throw new Error("Input should be of integer");
    // is caluclation postive today-given
  // }

  const actualYear = new Date().getFullYear();
  console.log(actualYear);

  // birthDate


  return substracYearFromToadysYear(numberInput);
}

function substracYearFromToadysYear(year) {
  // brak walidacji
  
  const actualYear = new Date().getFullYear();
  return actualYear - year;
}

// function getMyAge(input) {
//   const isInputNotEmptyString = isNotEmptyString(input);
//   const isInputPositiveNumber = isPositiveNumber(input);
//   const isInputDateObject = input instanceof Date;
//   const isEligibleToUseInputAsDate = isInputNotEmptyString || isInputPositiveNumber || isInputDateObject
//   if (!isEligibleToUseInputAsDate)
//     throw Error("Input is not a string, number nor Date object.");

//   const actualYear = new Date().getFullYear();

//   const isPrimitiveTypeOfInput = isInputNotEmptyString || isInputNotEmptyString
//   if (isPrimitiveTypeOfInput) {
//     const inputString = input.toString();
//     if (inputString.length !== 4) throw Error("Invalid length of year");
//     return actualYear - new Date(inputString).getFullYear();
//   }
//   //sprawdzic casy na <1000

//   return actualYear - inputValue.getFullYear();
// }

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(990);
// const result4 = getMyAge(() => {});
// const result4 = getMyAge({});

console.log(result1, result2, result3);
