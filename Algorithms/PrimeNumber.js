// Problem: Given a number "n", determine if the number is prime or not

// Prime number is the number greater than 1 that is not the product of two smaller natural numbers

function primeNumber(n) {
  if (n < 2) {
    return false;
  }

  for (let index = 2; index < n; index++) {
    if (n % index == 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(2));
console.log(primeNumber(4));
console.log(primeNumber(5));

// Big O = O(n) => Linear

// Here is the most optimized way to check
function primeNumber2(n) {
  if (n < 2) {
    return false;
  }

  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index == 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber2(2));
console.log(primeNumber2(4));
console.log(primeNumber2(5));

// Big O = O(sqrt(n))
