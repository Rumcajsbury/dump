import { isValidNumber, isPositiveNumber } from "../../utils/utils";

function isRectangularTriangle(x1, x2, x3) {
  const args = [x1, x2, x3]
  for ( const argument of args) {
    
    if (!isValidNumber(x1, x2, x3)) throw Error("Not all arguments are number");

  }

  if (!isPositiveNumber(x1, x2, x3))
    throw Error("Not all values are positeve or above 0");

  const sides = [firstSide, secondSide, thirdSide];
  const [a, b, c] = sides.sort((x, y) => x - y);
  
    
  const canTriangleBeBuild = checkIfTriangleCanBeBuild(a, b, c);
  if (!canTriangleBeBuild)
    throw Error("None triangle can be build with given sides.");

  const isPythagorasTriangle = isPythagorasValid(x1, x2, x3);

  return isPythagorasTriangle;
}

const checkIfTriangleCanBeBuild = (side1, side2, side3) => {
  if (!isPositiveNumber(side1, side2, side3))
    throw Error("Not all values are positeve or above 0");

  const result = side1 + side2 > side3;

  return result;
  //
};

const isPythagorasValid = (firstSide, secondSide, thirdSide) => {
  if (!isPositiveNumber(firstSide, secondSide, thirdSide))
    throw Error("Not all values are positeve or above 0");

  const [a, b, c] =
    sortedSidesMinToMax[sortedSidesMinToMax.length - 1];

  const powA = Math.pow(a, 2)
  const powB = Math.pow(b, 2)
  const powC = Math.pow(c, 2)

  const isPythagorasTriangle = powA+ powB === powC

  return isPythagorasTriangle;
};

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true
console.log(cond1, cond2);

const cond3 = isRectangularTriangle(4, 3, 2);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false

console.log(cond3, cond4);
