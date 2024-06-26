function generateArrayWithRandomNumbers(
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  for (const arg of arguments) {
    isValueNumber(arg);
  }

  isValueInteger("howManyNumbers", howManyNumbers);
  isValuNotANaN("min", min);
  isValuNotANaN("max", max);

  // const generatedArray = [];
  const generatedArray = new Array(10).fill("");

  for (const index in generatedArray) {
    const randomNumberInRange =
      Math.floor(Math.random() * (max - min + 1)) + min;
    generatedArray[index] = randomNumberInRange;
  }
  // inna petla ( for const of ) jak

  console.log(generatedArray);
  return generatedArray;
}

function generateArrayOfArrays(
  howManyArrays = 10,
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  for (const arg of arguments) {
    isValueNumber(arg);
  }

  isValueInteger("howManyNumbers", howManyNumbers);
  isValueInteger("howManyArrays", howManyArrays);
  isValueValidNumber("min", min);
  isValueValidNumber("max", max);

  const generatedArrays = [];

  for (let i = 0; i < howManyArrays; i++) {
    const arrayWithRandomNumbers = generateArrayWithRandomNumbers(
      howManyNumbers,
      min,
      max
    );
    generatedArrays.push(arrayWithRandomNumbers);
  }

  return generatedArrays;
}

function isValueNumber(value) {
  const isNumber = typeof value === "number";
  if (!isNumber) throw Error(`Given value: ${value} is not a number.`);
}

function isValueInteger(valueName, value) {
  const isInteger = Number.isInteger(value);
  if (!isInteger)
    throw Error(`Provided value: ${valueName} is not an integer.`);
}

function isValueValidNumber(valueName, value) {
  if (typeof value !== "number" || Number.isNaN(value))
    throw Error(`Provided value: ${valueName} is not a valid number.`);
}

function isValuNotANaN(valueName, value) {
  if (Number.isNaN(value))
    throw Error(`Provided value: ${valueName} is a NaN.`);
}
console.log(generateArrayWithRandomNumbers());
console.log(generateArrayOfArrays());
