const urlEncode = function(text) {
  // Put your solution here
  let output = "";
  for (var i = 0; i < text.length; i++) {
  	if (text.charAt(i) == " ") {
  		if (i !== 0 && i !== text.length - 1) {
  			output = output + "%20";
  		}
  	} else {
  			output = output + text.charAt(i);
  	}
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
