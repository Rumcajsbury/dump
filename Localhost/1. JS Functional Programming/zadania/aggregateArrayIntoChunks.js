import { isArgumentArray, isValidNumber } from "../../utils/utils.js";

const alphabet = "abcdefghijklmnoprstuwxyz".split("");

function generateRandomNumberInRange(min, max) {
  const isMaxMinValidNumber = isValidNumber(min, max);
  if (!isMaxMinValidNumber) throw Error("Max or Min are not valid numbers.");
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const aggregateIntoChunks = (array) => {
  const minChunkLength = 4;
  const maxChunkLength = 7;
  const isArgumentAnArray = isArgumentArray(array);
  if (!isArgumentAnArray) throw Error("Given argument is not an array.");

  const arrayLength = array.length;

  const isArrayMinimalLength = arrayLength >= minChunkLength;
  if (!isArrayMinimalLength) throw Error("Given array length is less than 4.");

  const isArrayInChunksRange =
    arrayLength <= maxChunkLength && arrayLength >= minChunkLength;
  if (isArrayInChunksRange) return array;

  let chunksArray = [];
  let remaningArray = [...array];

  while (remaningArray.length > 0) {
    if (remaningArray.length < 4) {
      const lastChunk = chunksArray.pop();

      remaningArray = [...lastChunk, ...remaningArray];
      continue;
    }

    const randomChunkLength = generateRandomNumberInRange(
      minChunkLength,
      maxChunkLength
    );

    const chunk = remaningArray.splice(0, randomChunkLength);

    chunksArray = [...chunksArray, chunk];
  }

  return chunksArray;
};

const chunks = aggregateIntoChunks(alphabet);
console.log("lastChunks", chunks);

const result = alphabet.join() === chunks.join();
console.log(alphabet.join(""));
console.log(chunks.join("").replace(/,/g, ""));
console.log(result);

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]

// ## Cele główne

// - [ ] Stwórz funkcję **aggregateIntoChunks** agregującą wszystkie elementy array na losowej długości chunki
// - [ ] Każdy chunk powienien mieć od 4 do 7 elementów, ostatni chunk też powinien być długości od 4 do 7

// ## Przydatne linki

// - Pętle w JS - https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/
// - Array methods w JS - https://medium.com/quick-code/understanding-js-array-methods-which-can-make-programming-not-so-overwhelming-for-beginners-7afb5b4a0967

//TODO
