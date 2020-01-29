const conditionalSum = function(values, condition) {
  // Your code here
  let output = 0;
  for (var i = 0; i < values.length; i++) {
  	if (condition == "even" && values[i] % 2 === 0) {
  		output = output + values[i];
  		//console.log("pass " + values[i] + " " + condition + " " + output);
  	} else if (condition == "odd" && values[i] % 2 === 1) {
  		output = output + values[i];
  		//console.log("pass " + values[i] + " " + condition + " " + output);
  	} else {
  		//console.log("fail " + values[i] + " " + condition);
  	}
  }
  return output;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
