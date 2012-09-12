function qsort(array) {
  // If the array is empty return
  if(array.length <= 1) { 
    return array;
  }
  
  // Hold the results of the sort in these arrays
  // Pick a pivot value
  var left = [],
      right = [],
      pivot = array[0];
  
  // Push into left and right arrays. Pick i = 1 so we skip the pivot value comparison
  for(var i=1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  
  // Recursively sort the left array until completed, then concat with the pivot value,
  // and the recursively sorted right array.
  return qsort(left).concat(pivot, qsort(right));
}


a = [5,1,4,3,2];
console.log( a, qsort(a) );
