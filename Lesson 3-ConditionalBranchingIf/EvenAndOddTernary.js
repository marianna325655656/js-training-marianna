const prompt=require("prompt-sync")({sigint:true}); 

let number = prompt("Enter the number: ");


let result = (number % 2 === 0) ? 'The number is Odd' : 'The number is Even';
console.log(result);
