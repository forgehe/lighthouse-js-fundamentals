function range(start, end, step) {
  //The function should return an array of numbers from start to end counting by step.
  let output = [];
  if (step > 0 && end > start) {
    for (let i = start; i <= end; i = i + step) {
      output.push(i);
      
    }
  }
  return output;
}

range(0, 10, 2);
range(10, 30, 5);
range(-5, 2, 3);