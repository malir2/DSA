// Problem: Given the number "n", find the nth element of the fibonacci sequence

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(2)); // 1
console.log(fibonacci(7)); // 13

// Big-O = O(2^n) => Worst
