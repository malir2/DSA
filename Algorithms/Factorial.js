// Problem: Given an integer "n", find the factorial of that integer

// In mathematics, factorial of a positive number is the product of all positive numbers less than or equal to "n"

function factorial(n) {
  // What we know is that factorial of zero is 1;
  let fact = 1;

  for (let index = n; index >= 1; index--) {
    fact = fact * index;
  }
  return fact;
}

console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(0));

// Big-O = O(n) => Linear
