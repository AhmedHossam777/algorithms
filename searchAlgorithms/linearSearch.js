//! problem : given an array of 'n' element and a target 't' element, find the index if 't' return -1 if not found

const arr = [1, 2, 3, 5, 4, 9];
const findNum = (n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
};

console.log(findNum(3));
console.log(findNum(3));
console.log(findNum(9));

//? Big-o = O(n)
