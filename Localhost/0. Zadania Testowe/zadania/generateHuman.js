import { v4 } from "uuid";
import { isArgumentArray, isNotEmptyString } from "../../utils/utils";

async function generateHuman() {
  const id = generateUniqueId();
  const name = await getRandomFirstName();
  const surname = await getRandomSurname();
  const email = getEmailBasedOnFullName(name, surname);
  const age = generateNumberInRange(18, 85);
  const phone = generateRandomPhoneNumber();
  const country = await getRandomCountryFormApi();

  const randomHuman = {
    id,
    name,
    surname,
    email,
    age,
    phone,
    country,
  };

  console.log(randomHuman);

  return randomHuman;
}

async function getRandomFirstName() {
  const isMaleGender = generateNumberInRange(0, 1);
  const genderPathname = isMaleGender ? "names-male.json" : "names-female.json";

  const apiURL = `https://www.randomlists.com/data/${genderPathname}`;

  return await getRandomNameFromAPI(apiURL);
}

async function getRandomSurname() {
  const apiURL = "https://www.randomlists.com/data/names-surnames.json";

  return await getRandomNameFromAPI(apiURL);
}

async function getRandomNameFromAPI(url) {
  const randomNamesFromAPIResponse = await fetchData(url);

  const isRandomNamesFromAPIResponseContaingData =
    "data" in randomNamesFromAPIResponse;
  if (!isRandomNamesFromAPIResponseContaingData)
    throw Error("Random name APi response does not contain data property.");

  const { data } = randomNamesFromAPIResponse;

  const isDataAnArray = isArgumentArray(data);
  if (!isDataAnArray) throw Error("Data in random names is not an array");

  const randomName = getRandomItemFromArray(data);

  return randomName;
}

async function getRandomCountryFormApi() {
  const countriesFromAPIResponse = await fetchData(
    "https://restcountries.com/v3.1/all?fields=name"
  );

  const isCountriesFromAPIResponseAnArray = isArgumentArray(
    countriesFromAPIResponse
  );

  if (!isCountriesFromAPIResponseAnArray)
    throw Error("Response from countries is not an array.");

  const randomCountry = getRandomItemFromArray(countriesFromAPIResponse);

  const isRandomCountryContainingName = "name" in randomCountry;
  if (!isRandomCountryContainingName)
    throw Error("Random country form array does not contain name property.");

  const isRandomCountryNameContainingCommon = "common" in randomCountry.name;
  if (!isRandomCountryNameContainingCommon)
    throw Error("Random country name does not have common property.");

  const randomCountryName = randomCountry.name.common;

  return randomCountryName;
}

async function fetchData(url) {
  const isValidString = isNotEmptyString(url);
  if (!isValidString) throw Error("Given url is not a valid string.");

  try {
    const response = await fetch(url);

    const jsonResponse = response.json();

    return jsonResponse;
  } catch (error) {
    throw Error(error);
  }
}

const getEmailBasedOnFullName = (firstName, lastName) =>
  `${firstName.toLowerCase()}${lastName.toLowerCase()}@gmail.com`;

const generateNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomPhoneNumber = () =>
  generateNumberInRange(1, 9) * 100000000 +
  Math.floor(Math.random() * 100000000);

function generateUniqueId() {
  return v4();
}

function getRandomIndexByArrayLength(value) {
  const isValueArray = isArgumentArray(value);
  if (!isValueArray) throw Error("Given value is not an array. ");

  return Math.floor(Math.random() * value.length);
}

function getRandomItemFromArray(value) {
  const isValueArray = isArgumentArray(value);
  if (!isValueArray) throw Error("Given value is not an array. ");

  return value[getRandomIndexByArrayLength(value)];
}

generateHuman();
//walidacje, asycn same, warunki do zmiennyych try catche
