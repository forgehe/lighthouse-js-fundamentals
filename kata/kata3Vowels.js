let numberOfVowels = function(data) {
  // Put your solution here
  let chars = data.split("");
  let output = 0;
  for (let i = 0; i < chars.length; i++) {
  	if (chars[i] == "a" || chars[i] == "e" || chars[i] == "i" || chars[i] == "o" || chars[i] == "u") {
  		output++;
  	}
  }
  return output;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
