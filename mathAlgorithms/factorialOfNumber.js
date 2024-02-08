//! problem : given the integer 'n' find the factorial of that integer

const findFactorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(findFactorial(2)); // 2
console.log(findFactorial(5)); // 120
console.log(findFactorial(4)); // 24

//* O(n) = n