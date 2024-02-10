//! problem : given an array of 'n' element and a target 't' element, find the index if 't' return -1 if not found

const arr = [1, 2, 3, 4, 8, 6, 7, 9];

const findNum = (target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(findNum(2));
console.log(findNum(3));
console.log(findNum(9));


//? Big-o = O(n)