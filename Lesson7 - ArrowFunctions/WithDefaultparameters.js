//Requirement:
// Create an arrow function greet that takes a name parameter.
// The parameter should have a default value of "Guest".
// The function should return "Hello, [name]!".
// Writhe your code here

let greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());