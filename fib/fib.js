// A slow but simple recursive fib
// O(2^n)
function fib(n) {
  return (n < 2) ? n : fib(n-1) + fib(n-2);
}

console.log( fib(10) );



// A faster, iterative fib
function fastFib(n) {
  var fibs = [0,1]; // seed the array
     
  for(var i=0; i < n; i++) {
    fibs.push(fibs[0] + fibs[1]);
    fibs.shift();
  }

  return fibs[0];
}

console.log( fastFib(10) );

// Simplicity of the recursive (almost) but uses a closure to capture a cache so we don't recompute numbers every iteration
var closureFib = (function() {
  var cache = [0,1];
  return function(n) {
    if(cache[n] === undefined) {
      cache[n] = closureFib(n-1) + closureFib(n-2);
    }
    return cache[n];
  }
})();

console.log( closureFib(10) );
