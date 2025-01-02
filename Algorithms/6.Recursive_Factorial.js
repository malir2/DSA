// Problem: Find the recursive factorial of "n"

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(10));

// Big-O = O(n) => Linear
