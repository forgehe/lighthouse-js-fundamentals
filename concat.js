function concat(array1, array2) {
  //The function should, when given two arrays, concatenate the arrays together.
  let output = array1;
  for (var i = 0; i < array2.length; i++) {
  	output.push(array2[i]);
  }
  return output;
}

concat([ 1, 2, 3 ], [ 4, 5, 6 ]);
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);
concat([], [ 9, 7, 2 ]);
concat([ 5, 10 ], []);