import {
  isArgumentArray,
  isArrayNotEmptyArray,
  isValueString,
} from "../../utils/utils.js";

function filterWith(arr, phrase) {
  const isAnArray = isArgumentArray(arr);
  if (!isAnArray) throw Error("arr argument is not an array.");

  // tutaj NOT
  isArrayNotEmptyArray(arr);
  isValueString(phrase);

  const phraseLength = phrase.length;
  const isPhraseLessThanThreeChars = phraseLength < 3;
  if (isPhraseLessThanThreeChars) return [];

  const regexPhrase = new RegExp(phrase);

  const searchResult = arr.reduce((accumulator, currentValue) => {
    const containsValue = deepSearch(currentValue, regexPhrase);

    if (containsValue) return accumulator.concat(currentValue);

    return accumulator;
  }, []);

  return searchResult;
}

// wyciągniety na góre
function deepSearch(itemToSearch, regexPhrase) {
  const itemToSearchType = typeof itemToSearch;

  const isValueStringType = itemToSearchType === "string";
  const isValueNumberType = itemToSearchType === "number";
  const isPrimitiveType = isValueStringType || isValueNumberType;

  if (isPrimitiveType) {
    const stringifiedValue = itemToSearch.toString();

    return regexPhrase.test(stringifiedValue);
  }

  const isItemAnArray = isArgumentArray(itemToSearch);
  if (isItemAnArray) {
    for (const item of itemToSearch) {
      const doesContainElement = deepSearch(item, regexPhrase);
      if (doesContainElement) return true;
    }
  }

  const isObjectType = itemToSearchType === "object";
  const isValidObject =
    Object.prototype.toString.call(itemToSearch) === "[object Object]";
  const isEligibleToVerifyObjectValue = isObjectType && isValidObject;
  if (isEligibleToVerifyObjectValue) {
    for (const index in itemToSearch) {
      const doesContainElement = deepSearch(itemToSearch[index], regexPhrase);
      if (doesContainElement) return true;
    }
  }

  return false;
}

const data = [
  {
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Sheppard Jensen",
      },
    ],
  },
  {
    _id: "5e985a0709dfa1e6fd93c6ad",
    age: 32,
    eyeColor: "brown",
    name: "Madelyn Dickson",
    gender: "female",
    company: "KENGEN",
    email: "madelyndickson@kengen.com",
    phone: "+1 (984) 521-2439",
    tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
    friends: [
      {
        id: 0,
        name: "Bruce Barton",
      },
      {
        id: 1,
        name: "Juliet Schmidt",
      },
      {
        id: 2,
        name: "Horton Haley",
      },
      {
        id: 3,
        name: "Herminia Witt",
      },
    ],
  },
  {
    _id: "5e985a0737e2306e9aef6ecd",
    age: 26,
    eyeColor: "blue",
    name: "Mcguire Mercado",
    gender: "male",
    company: "LINGOAGE",
    email: "mcguiremercado@lingoage.com",
    phone: "+1 (963) 450-2194",
    tags: ["cupidatat", "occaecat", "amet", "qui", "elit", "esse", "deserunt"],
    friends: [
      {
        id: 0,
        name: "Loraine Harper",
      },
      {
        id: 1,
        name: "Luann Randall",
      },
      {
        id: 2,
        name: "Obrien Rich",
      },
      {
        id: 3,
        name: "Noble Wilkerson",
      },
    ],
  },
  {
    _id: "5e985a07148cfba58c860ec2",
    age: 26,
    eyeColor: "brown",
    name: "Marina Porter",
    gender: "female",
    company: "GORGANIC",
    email: "marinaporter@gorganic.com",
    phone: "+1 (867) 417-3497",
    tags: [
      "laborum",
      "aliquip",
      "sit",
      "adipisicing",
      "aute",
      "cupidatat",
      "aliquip",
    ],
    friends: [
      {
        id: 0,
        name: "Blair Hill",
      },
      {
        id: 1,
        name: "Ebony Jimenez",
      },
    ],
  },
  {
    _id: "5e985a074984f9f08ccaaa4c",
    age: 25,
    eyeColor: "green",
    name: "Barlow Ferguson",
    gender: "male",
    company: "TOYLETRY",
    email: "barlowferguson@toyletry.com",
    phone: "+1 (837) 484-2231",
    tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
    friends: [
      {
        id: 0,
        name: "Delacruz Acevedo",
      },
      {
        id: 1,
        name: "Gloria Tanner",
      },
      {
        id: 2,
        name: "Cantrell Myers",
      },
      {
        id: 3,
        name: "Fisher Leonard",
      },
    ],
  },
];

// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie

//jako 1 argument podajemy naszą tablicę obiektów. Jako drugi argument szukaną frazę np:
const filterResult1 = filterWith(data, "Cummings Baxter");
// console.log(filterResult1);
// funkcja zwraca tablicę z konretnym obiektem:
const result1 = [
  {
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Sheppard Jensen",
      },
    ],
  },
];

const filterResult2 = filterWith(data, "nisi");
// console.log(filterResult2);

// jako phrase przekazujemy jeden z tagów w tablicy tags ,który znajduje się w konretnym obiekcie;

const result2 = [
  {
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Sheppard Jensen",
      },
    ],
  },
  {
    _id: "5e985a0709dfa1e6fd93c6ad",
    age: 32,
    eyeColor: "brown",
    name: "Madelyn Dickson",
    gender: "female",
    company: "KENGEN",
    email: "madelyndickson@kengen.com",
    phone: "+1 (984) 521-2439",
    tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
    friends: [
      {
        id: 0,
        name: "Bruce Barton",
      },
      {
        id: 1,
        name: "Juliet Schmidt",
      },
      {
        id: 2,
        name: "Horton Haley",
      },
      {
        id: 3,
        name: "Herminia Witt",
      },
    ],
  },
];

const filterResult3 = filterWith(data, "Delacruz Acevedo");
console.log(filterResult3);

// jako phrase przekazuje dane z tablicy friends,która znajduje się w konretnym obiekcie;

const result3 = [
  {
    _id: "5e985a074984f9f08ccaaa4c",
    age: 25,
    eyeColor: "green",
    name: "Barlow Ferguson",
    gender: "male",
    company: "TOYLETRY",
    email: "barlowferguson@toyletry.com",
    phone: "+1 (837) 484-2231",
    tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
    friends: [
      {
        id: 0,
        name: "Delacruz Acevedo",
      },
      {
        id: 1,
        name: "Gloria Tanner",
      },
      {
        id: 2,
        name: "Cantrell Myers",
      },
      {
        id: 3,
        name: "Fisher Leonard",
      },
    ],
  },
];
