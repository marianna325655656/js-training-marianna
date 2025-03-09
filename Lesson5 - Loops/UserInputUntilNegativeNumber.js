const prompt=require("prompt-sync")({sigint:true});
let number;

do {
    number = parseFloat(prompt("Enter a number: "));
    if (number >= 0) {
        console.log(number); 
    }
} while (number >= 0); 