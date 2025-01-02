// Problem: Given a number n, return the nth number in the Fibonacci sequence.

// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

// For example: Fibocanni(4) = [0,1,1,2]

function fibonacci(n) {
  // What we know: It always have 0 and 1 in the begining
  let fib = [0, 1];

  // We already have 2 values in fib
  for (let index = 2; index < n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }

  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(6));

// Big-O = O(n) => Linear
