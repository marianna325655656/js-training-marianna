// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

let sumOnetoN = (n, callback) => {
let sum = 0;
for (let i = 1; i <= n; i++) { 
    sum += i;
}
return callback(sum);
}


let callback = (result) => {
    console.log("The sum is:", result );
}
sumOnetoN(3, callback);
