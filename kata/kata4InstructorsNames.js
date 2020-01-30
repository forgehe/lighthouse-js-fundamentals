const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let length = 0;
  let instructorOutput;
  for (let i = 0; i < instructors.length; i++) {
  	if (instructors[i].name.length > length) {
  		length = instructors[i].name.length
  		instructorOutput = instructors[i];
  	}
  }
  return instructorOutput;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
