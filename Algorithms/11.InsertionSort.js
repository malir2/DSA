// Problem: Sort the given array with Insertion Sort

function InsertionSort(arr) {
  // Loop through each element in the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]; // The element to be inserted
    let left = i - 1; // The index of the last sorted element

    // Shift elements of the sorted segment to the right to make space for the element to be inserted
    while (left >= 0 && arr[left] > numberToInsert) {
      arr[left + 1] = arr[left];
      left--;
    }

    // Insert the element at the correct position
    arr[left + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
InsertionSort(arr);

console.log(arr); // Output the sorted array

// Big O = O(n^2) => Due to nested loop
