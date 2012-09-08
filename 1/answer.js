// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumMultiplesOf3and5to(n) {
  var sum = 0;
  
  while(n--) {
    if(n % 3 == 0 || n % 5 == 0) {
      sum += n;
    }
  }
  
  return sum;
}

console.log( sumMultiplesOf3and5to(1000) );