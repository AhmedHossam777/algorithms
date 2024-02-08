//! problem : Given a number 'n', find the first 'n' element of the Fibonacci Sequence
//? Fibonacci Sequence : is a sequence each number is the sum of two previous ones


const fibonacci = (n) => {
  const arr = [0,1];

  for (let i = arr.length; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

//* O(n) = n