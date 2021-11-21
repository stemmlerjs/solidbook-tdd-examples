

const isWithinRange = (number: number) => {
  if (number < 1 || number > 100) {
    return false;
  } else {
    return true;
  }
}

const isMultipleOf = function (divisor: number, number: number) : boolean {
  return number % divisor === 0;
}

export function fizzbuzz (numOne: number, numTwo: number): string {

  if (!isWithinRange(numOne) || !isWithinRange(numTwo)) 
    throw new Error ("Numbers not within 1-100 range")

  const isMultipleOfThreeFound = isMultipleOf(3, numOne) || isMultipleOf(3, numTwo);
  const isMultipleOfFiveFound = isMultipleOf(5, numOne) || isMultipleOf(5, numTwo);

  if (isMultipleOfThreeFound && isMultipleOfFiveFound) {
    return "Fizzbuzz"
  }

  if (isMultipleOfThreeFound) {
    return "Fizz"
  }

  if (isMultipleOfFiveFound) {
    return "Buzz"
  }

  return "";
}