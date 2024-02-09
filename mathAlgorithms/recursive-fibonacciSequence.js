//! problem : Given a number 'n', find the first 'n' element of the Fibonacci Sequence
//? Fibonacci Sequence : is a sequence each number is the sum of two previous ones

const findFib = (n, arr = [0, 1]) => {
  if (n <= arr.length) return arr.slice(0, n);

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return findFib(n, arr); // Recursive call to findFib function with updated arr
};

console.log(findFib(5)); // Output: [0, 1, 1, 2, 3]

