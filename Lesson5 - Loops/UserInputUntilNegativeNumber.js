const prompt=require("prompt-sync")({sigint:true});
let number;

do {
    number = parseFloat(prompt("Enter a number: "));
    if (number >= 0) {
        console.log(number); 
    }
} while (number >= 0); 

// based on the Tast 2 requirements:
// 2. Do-While Loop Task – User Input Until Negative Number
// Requirements:

// Continuously ask the user to enter a number.
// Stop asking when the user enters a negative number.
// Use a do-while loop.
// Print each entered number.
// After exiting, print a message indicating the loop has ended. <----- 

// You should log a message that the loop has ended
