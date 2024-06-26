export function isValidNumber(...args) {
  for (const argument of args) {
    const isValid = typeof argument === "number" && !isNaN(argument);

    if (!isValid) return false;
  }

  return true;
}

export function isPositiveNumber(...args) {
  for (const argument of args) {
    const isPositive = isValidNumber(argument) && argument > 0;

    if (!isPositive) return false;
  }

  return true;
}

export function isArgumentArray(value) {
  return Array.isArray(value);
}

export function isNotNullOrUndefined(value) {
  return value !== null && value !== undefined;
}

export function isNotEmptyString(value) {
  return typeof value === "string" && value.length > 0;
}

export function isEmptyString(value) {
  return typeof value === "string" && value.length < 1;
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isArrayNotEmptyArray(array) {
  const isArrayLengthMoreThanZero = array.length >= 1;

  if (!isArrayLengthMoreThanZero) throw Error("Array is an empty array.");
}

export function isValueString(value) {
  const isString = typeof value === "string";

  if (!isString) throw Error("Value is not a string");
}

export function isArrayLengthGreaterThanZero(array) {
  return array.length > 0;
}

export function isPositiveNumberValue(array) {
  return array.length > 0;
}
