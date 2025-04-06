// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

function printStringInput(input){
    if(typeof input !== "string"){
         return "Invalid input: Please provide a string";
       
    }

    if(input.length < 1 || input.length >50){
      return "The length is not between 1 and 50";
        
    }

    for (let char of input){
        console.log(char);
    }
}

console.log(printStringInput("Hello World"));


