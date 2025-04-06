
// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

function capitalizeNameAndSurname(name, surname) {
    
    if (typeof name !== "string" || typeof surname !== "string") {
        return "Invalid input: Enter a string";
        
    }
    
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const capitalizedSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
    
    return capitalizedName + ' ' + capitalizedSurname;
}

// Example usage
console.log(capitalizeNameAndSurname('Arthur', 'Vardanyan')); 
console.log(capitalizeNameAndSurname(1324, 899909)); 