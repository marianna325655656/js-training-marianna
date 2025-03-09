const prompt=require("prompt-sync")({sigint:true}); 

let age = prompt("Enter the age: ");
// age is taken as a string from prompt(), so comparisons (age < 0, age >= 0, etc.) will not work correctly unless converted to a number first.

switch(true){
    case age < 0 :
        console.log("Invalid age");
        break;
    case age >= 0 && age <= 12 :
        console.log("Child");
        break;
    case age >= 13 && age <= 17 :
        console.log("Teenager");
        break;
    case  age >= 18 && age <= 64 :
        console.log("Adult");
        break;  
    case age >= 65 :
        console.log("Senior")    
    case isNaN(age) :
        console.log("Please enter a valid age");
        break;  
    default :
        console.log("Unexpected value")
    
}
