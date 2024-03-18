//! Given an array of integer, Sort the array
const arr = [-6, 20, 60, 12, -2, 4];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) { 
      if (arr[j] > arr[j + 1]) { 
        let temp = arr[j]; 
        arr[j] = arr[j + 1]; 
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
//? big-O = O(n^2)
