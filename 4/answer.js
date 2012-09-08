// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

function getHighestPalindrome(high, low) {
  var highest = 0;
  var product;
  
  for(var i=high; i >= low; i--) {
    for(var j=high; i >= low; j--) {
      product = i * j;
      if(product <= highest) {
        break;
      }
      // Is it a palindrome
      if(isPalindrome(product)) {
        highest = product;
      }
    }
  }
  
  return highest;
}

function isPalindrome(n) {
  var s = n.toString();
  var reverse = s.split('').reverse().join('');
  return s == reverse;
}

console.log(getHighestPalindrome(999, 100));