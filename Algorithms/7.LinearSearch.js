// Problem: Given an array of "n" elements find the index of "t"

function linearSearch(arr, t) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === t) {
      return index;
    }
  }
  return -1;
}

console.log(linearSearch([0, 1, 2, 3, 4], 4));
console.log(linearSearch(["b", 4, 3, 5], "a"));
console.log(linearSearch(["b", "a", "t", 3, "g", "h"], "t"));

// Big O = O(n) => Linear time complexity
