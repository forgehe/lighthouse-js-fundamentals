let camelCase = function(input) {
  // Your code here
  const regex = /( )+([a-z])/gi;
  const output = input.replace(regex, function(match, p1, p2) {
    return p2.toUpperCase();
  });
  return output;
};



console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));