//! problem : given an array of 'n' element and a target 't' element, find the index if 't' return -1 if not found
const arr = [1, 2, 3, 4, 8, 6, 7, 9];

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex;

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, 9));

//? Binary search work only for sorted array
//? Big-o = O(logn)
