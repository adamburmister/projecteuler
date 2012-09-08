// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143 ?

function findHighestPrimeFactor(n) {
  var max = Math.ceil(Math.sqrt(n));
  for(var i=max; i >= 2; i--) {
    if(n % i == 0 && findHighestPrimeFactor(i) == 1) {
      return i;
    }
  }
  return 1;
}

console.log(findHighestPrimeFactor(600851475143));