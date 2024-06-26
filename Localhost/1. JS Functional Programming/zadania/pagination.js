import {
  isArgumentArray,
  isPositiveNumber,
  isValidNumber,
  isPositiveNumberValue,
} from "../../utils/utils.js";

const data = new Array(100).fill("").map((_, index) => index + 1);
const settings = { actualPageIdx: 12, entriesOnPage: 9 };

const paginateArray = (dataEntries, settings) => {
  const isDataEntriesArray = isArgumentArray(dataEntries);
  if (!isDataEntriesArray) throw Error("Data Entries is not an array.");

  const isArrayLengthGreaterThenZeroValue = isPositiveNumberValue(dataEntries);
  if (!isArrayLengthGreaterThenZeroValue)
    throw Error("Data Entries length is not greater than zero.");

  const doesSettingsIncludesRequiredFields =
    "actualPageIdx" in settings && "entriesOnPage" in settings;

  if (!doesSettingsIncludesRequiredFields)
    throw Error("Settings object does not include required fields.");

  const isActualPageIdxValidNumber = isValidNumber(settings["actualPageIdx"]);
  const currentPage = settings["actualPageIdx"] + 1;
  const isActualPageIdxValidNumberGreaterOrEqualZero =
    isPositiveNumber(currentPage);
  const isEntriesOnPagePositiveNumber = isPositiveNumber(
    settings["entriesOnPage"]
  );

  const areSettingsFieldsValid =
    isActualPageIdxValidNumber &&
    isActualPageIdxValidNumberGreaterOrEqualZero &&
    isEntriesOnPagePositiveNumber;

  if (!areSettingsFieldsValid)
    throw Error("At least one of fields is not greater than zero or is NaN.");

  const allItems = dataEntries.length;
  const itemsPages = Math.ceil(allItems / settings.entriesOnPage);
  const canReachPage = itemsPages < settings.actualPageIdx;

  if (!canReachPage) {
    throw Error("Cannot reach page out of scope");
  }

  const startIndex = settings.actualPageIdx * settings.entriesOnPage;
  const endIndex = startIndex + settings.entriesOnPage;

  return dataEntries.slice(startIndex, endIndex);
};

const result = paginateArray(data, settings);
console.log(result);
