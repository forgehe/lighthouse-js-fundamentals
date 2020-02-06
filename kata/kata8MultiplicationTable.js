const multiplicationTable = function(maxValue) {
  // Your code here
  let output;
  for (let i = 1; i <= maxValue; i++) {
    let rowOutput;
    for (let j = 1; j <= maxValue; j++) {
      if (j !== 1) {
        rowOutput = rowOutput + " " + j * i;
      } else {
        rowOutput = j * i;
      }
      
    }
    if (i !== 1) {
      output = output + "\n" + rowOutput;
    } else {
      output = rowOutput;
    }
    
  }

  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
