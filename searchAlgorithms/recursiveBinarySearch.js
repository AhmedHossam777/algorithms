//! problem : given an array of 'n' element and a target 't' element, find the index if 't' return -1 if not found
const arr = [1, 2, 3, 4, 8, 6, 7, 9];

const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) return middleIndex;

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

console.log(recursiveBinarySearch(arr, 9));

//? Binary search work only for sorted array
//? Big-o = O(logn)
