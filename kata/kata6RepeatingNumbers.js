let repeatNumbers = function(data) {
  // Put your solution here
  let totalArrayOutput = "";
  
  for (let i = 0; i < data.length; i++) {
    let singleArrayOutput = "";
    for (let k = 0; k < data[i][1]; k++) {
      singleArrayOutput = singleArrayOutput + data[i][0];
    }
    //console.log(singleArrayOutput + " .. " + totalArrayOutput + " .. " + i);
    if (i !== 0) {
      totalArrayOutput = totalArrayOutput + " , " + singleArrayOutput;
    } else {
      totalArrayOutput = singleArrayOutput;
    }
  }
  return totalArrayOutput;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));