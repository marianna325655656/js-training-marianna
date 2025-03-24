// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.
// Write your code here

const prompt=require("prompt-sync")({sigint:true});

let number = parseInt(prompt("Enter the number: "));

let oddOrEven = function(num){
// The function prints the result using console.log(), but it does not return the result.
// Requirement: The function should return whether the number is even or odd.
// You should use return instead of console.log()

   if(num % 2 === 0){
        console.log('The number is Even');
    }else{
        console.log('The number is Odd');
    }
};
oddOrEven(number);
