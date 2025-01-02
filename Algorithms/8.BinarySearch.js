// Problem: Given a sorted array of "n" elements, find the index of "t" using binary search if find return the index else return -1

// Key Info: Binary search is only work on the sorted array

// Binary Search Working:
// => If the array has no elements, then return -1
// => If the array has one element, then return the index if the element is equal to "t" else return -1
// => If array has more than one element then we find the middle element of the array. If target equals to the middle element then return the index of the middle element
// => If the target element is less than the middle element then we will apply binary search on the left half of the array
// => If the target element is greater than the middle element then we will apply binary search on the right half of the array

// Solution:

function binarySearch(arr, t) {
  let leftSide = 0;
  let rightSide = arr.length - 1;

  while (leftSide <= rightSide) {
    let middleElement = Math.floor((leftSide + rightSide) / 2);

    if (arr[middleElement] === t) {
      return middleElement;
    }

    if (arr[middleElement] < t) {
      leftSide = middleElement + 1;
    } else {
      rightSide = middleElement - 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big(0) = O(logn) => Logirthmic
