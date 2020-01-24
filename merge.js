function merge(array1, array2) {
  let output = array1.concat(array2);
  output.sort();
  return output;
}