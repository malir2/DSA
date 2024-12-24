// Problem: Check the given integer "n", is the power of two or not

// Example: PowerOf2 (4) = true 2^2

function powerOf2(n) {
  for (let index = 0; index < n; index++) {
    if (Math.pow(2, index) == n) {
      return true;
    }
  }

  return false;
}

// There is one more optimal way to solve this problem
function isPowerOf2(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) == 0;
}

// console.log(powerOf2(1));
// console.log(powerOf2(4));
// console.log(powerOf2(5));
// console.log(powerOf2(10));
console.log(isPowerOf2(8));
console.log(isPowerOf2(0));
console.log(isPowerOf2(4));
console.log(isPowerOf2(10));

// Big-O = O(n) => Linear
// Big-O for isPowerOf2 = O(1) => Constant
