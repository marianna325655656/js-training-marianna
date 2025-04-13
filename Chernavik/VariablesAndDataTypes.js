// Task 1:  Identify When to Use let or const
const firstName = 'Anna';
let counter = 0;
const Pi = 3.14159;
let age = 15;
 const colors  = [
 "red",
 "green",
 'yellow'];
console.log(firstName);
console.log(counter);
console.log(Pi);
console.log(age);
console.log(colors);

// Task 2: Use typeof to Check Data Types
// Declare variables of different types:

let groupId = 12345;
let weather = "cold";
let dropdownBeSelected = false;
let polygonId = null;
let phoneNumber = undefined;
const mySymbol = Symbol('description');
let timestamp = 1233445445n;
console.log("groupId is a " + typeof groupId);
console.log("weather is a " +  typeof weather);
console.log("dropdownBeSelected is a " +  typeof dropdownBeSelected);
console.log("polygonId is an  " +  typeof polygonId);
console.log("phoneNumber is a" +  typeof phoneNumber);
console.log('mySymbol is a ' +  typeof mySymbol);
console.log('timestamp is a ' +  typeof timestamp);

// Task 3: Convert Different Values to Strings, Numbers and Booleans
// Log the result and write the answer next to the console.log() statement
// Example:
// Convert the following number to a string and log the result:
const orderNumber = 98765;
console.log(String(orderNumber));

const isActive = true;
console.log(String(isActive));

const price = "49.99";
console.log(Number(price));

const hasAccess = false;
console.log(Number(hasAccess));

const emptyText = "";
console.log(Number(emptyText));

const username = "JohnDoe";
console.log(Boolean(username));

const itemCount = 0;
console.log(Boolean(itemCount));

const notDefined = undefined;
console.log(Number(notDefined));

const spaceString = "   ";
console.log(Boolean(spaceString));

const emptyValue = null;
console.log(String(emptyValue))




