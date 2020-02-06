let calculateChange = function(total, cash) {
  // Your code here
  let changeToGive = cash - total;
  let money = [
    [2000, 0], 
    [1000, 0], 
    [500, 0], 
    [200, 0], 
    [100, 0], 
    [25, 0], 
    [10, 0], 
    [5, 0],
    [1, 0]
  ];
  let change = {};
  for (let i = 0; i < 9; i++) {
    while (changeToGive > money[i][0]) {
      changeToGive = changeToGive - money[i][0];
      
      money[i][1]++;
    }
    //console.log(money[i][0] + " " + money[i][1]);
  }
  if (money[0][1] > 0) {
    change.twentyDollar = money[0][1];
  } 
  if (money[1][1] > 0) {
    change.tenDollar = money[1][1];
  } 
  if (money[2][1] > 0) {
    change.fiveDollar = money[2][1];
  } 
  if (money[3][1] > 0) {
    change.twoDollar = money[3][1];
  } 
  if (money[4][1] > 0) {
    change.oneDollar = money[4][1];
  } 
  if (money[5][1] > 0) {
    change.quarter = money[5][1];
  } 
  if (money[6][1] > 0) {
    change.dime = money[6][1];
  } 
  if (money[7][1] > 0) {
    change.nickel = money[7][1];
  }
  if (money[8][1] > 0) {
    change.penny = money[8][1];
  } 
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));