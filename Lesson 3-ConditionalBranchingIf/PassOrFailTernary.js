const prompt=require("prompt-sync")({sigint:true});
let score = prompt("Enter the score: ");

let result = (score >= 50) ? 'Pass' : 'Fail';
console.log(result);