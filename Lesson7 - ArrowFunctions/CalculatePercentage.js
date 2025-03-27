// Task 3. Calculate Percentage
// Requirement:
// Write an arrow function that takes two arguments:
// total: the total value
// percentage: the percentage to calculate
// The function should return the calculated percentage of the total.
// Writhe your code here

let calculatePercentage = (total, percentage) =>{
    return (total*percentage)/100;
} 
let result = calculatePercentage(300, 5);
console.log(result);