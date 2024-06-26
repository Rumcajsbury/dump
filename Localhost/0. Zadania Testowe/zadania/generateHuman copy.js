// const { v4: uuidv4 } = require("uuid");

// async function generateHuman() {
//   randomHuman.name = await getRandomFirstName();
//   randomHuman.surname = await getRandomSurnameName();
//   randomHuman.email = getEmailBasedOnFullName(
//     randomHuman.name,
//     randomHuman.surname
//   );

//   console.log(randomHuman);

//   const randomHuman = {
//     id,
//     name,
//     surname,
//     email,
//     age,
//     phone,
//     country,
//   };
// }

// async function getRandomFirstName() {
//   // try catch
//   const isMaleGender = generateNumberInRange(0, 1);
//   const genderPathname = isMaleGender ? "names-male.json" : "names-female.json";

//   const apiURL = `https://www.randomlists.com/data/${genderPathname}`;

//   return await getRandomNameFromAPI(apiURL);
// }

// async function getRandomSurnameName() {
//   const apiURL = "https://www.randomlists.com/data/names-surnames.json";
//   return await getRandomNameFromAPI(apiURL);
// }

// async function getRandomNameFromAPI(url) {
//   const isUrlString = typeof ulr === "string" && url.length > 0;
//   // brak walidacji na url

//   const randomNames = await fetch(url)
//     .then((response) => response.json())
//     .catch((error) => {
//       throw Error(error);
//     });

//   const { data } = randomNames;
//   const randomName = getRandomItemFromArray(data);

//   return randomName;
// }

// const getEmailBasedOnFullName = (firstName, lastName) =>
//   `${firstName.toLowerCase()}${lastName.toLowerCase()}@gmail.com`;

// const generateNumberInRange = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const generateRandomPhoneNumber = () =>
//   generateNumberInRange(1, 9) * 100000000 +
//   Math.floor(Math.random() * 100000000);

// async function getRandomCountryFormApi() {
//   const countriesFromAPI = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name"
//   )
//     .then((response) => response.json())
//     .catch((error) => {
//       console.log(error);
//       throw Error("Cannot get countries form API.");
//     });

//   const randomCountry = getRandomItemFromArray(countriesFromAPI);
//   const randomCountryName = randomCountry.name.common;

//   return randomCountryName;
// }

// const generateUniqueId = () => uuidv4();
// const getRandomIndexByArrayLength = (array) =>
//   Math.floor(Math.random() * array.length);
// const getRandomItemFromArray = (array) =>
//   array[getRandomIndexByArrayLength(array)];

// generateHuman();
