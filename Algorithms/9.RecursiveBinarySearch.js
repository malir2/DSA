// Problem: Given a sorted array of "n" elements and find the target element by resursive binary search

function resursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftSide, rightSide) {
  // Base Case
  if (leftSide > rightSide) {
    return -1;
  }

  let middleIndex = Math.floor((leftSide + rightSide) / 2);

  if (arr[middleIndex] === t) {
    return middleIndex;
  }

  if (arr[middleIndex] < t) {
    return search(arr, t, middleIndex + 1, rightSide);
  } else {
    return search(arr, t, leftSide, middleIndex - 1);
  }
}

console.log(resursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(resursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(resursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big(O) = O(logn) = Logrithmic
