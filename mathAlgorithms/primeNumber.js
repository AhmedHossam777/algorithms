//! given a number 'n' determine if the number is prime or not
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}
console.log(isPrime(5));
console.log(isPrime(8));


// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true
// }
// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(13));