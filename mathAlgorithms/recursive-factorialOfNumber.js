//! problem : given the integer 'n' find the factorial of that integer

const findFact = (n, result = 1) => {
  if (n !== 0) {
    result *= n;
    n--;
    return findFact(n, result);
  }
  return result;
};

console.log(findFact(5));
console.log(findFact(3));
console.log(findFact(4));
