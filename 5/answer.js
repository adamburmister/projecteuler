// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// 
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function isDivisible(n, minDivisor, maxDivisor) {
  for(var d=maxDivisor; d > minDivisor; d--) {
    if(n % d != 0) {
      return false;
    }
  }
  return true;
}

function gcd(n) {
  var start = n * n;
  var result = start;
  while(result++) {
    if(isDivisible(result, 11, n)) {
      break;
    }
  }
  return result;
}

console.log(gcd(20))