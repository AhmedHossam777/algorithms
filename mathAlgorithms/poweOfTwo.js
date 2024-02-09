//! problem : given a number 'n' determine if the number is power of 2 or not

const isPowerOfTwo = (n) => {
  let sqrt = Math.sqrt(n);

  return sqrt === Math.floor(sqrt);
}

console.log(isPowerOfTwo(36));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));

//? time complexity = O(1)