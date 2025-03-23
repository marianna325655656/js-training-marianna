const prompt = require("prompt-sync")({ sigint: true });

let grossSalary = prompt("Enter gross salary: ").trim(); // Trim whitespace
let itemPrice = parseFloat(grossSalary);
let socialSecurity = 0;
let stampDuty = 0;

// Function to validate the input
function isValidNumber(value) {
    return !isNaN(value) && value.toString() === grossSalary; // Ensure full input is numeric
}

// Function to calculate net salary
function calculateNetSalary(itemPrice) {
    // Validate input
    if (!isValidNumber(itemPrice) || itemPrice <= 0) {
        console.error("Error: Please enter a valid number greater than 0.");
        return null; // Exit the function if input is invalid
    }

    // Calculate Income tax
    let incomeTax = itemPrice * 0.20;

    // Calculate Social security contributions
    if (itemPrice <= 500000) {
        socialSecurity = itemPrice * 0.05;
    } else if (itemPrice <= 1125000) {
        socialSecurity = (itemPrice * 0.10) - 25000;
    } else {
        socialSecurity = 87500; // Max contribution for over 1,125,000 AMD
    }

    // Calculate Stamp duty
    if (itemPrice <= 100000) {
        stampDuty = 1500;
    } else if (itemPrice <= 200000) {
        stampDuty = 3000;
    } else if (itemPrice <= 500000) {
        stampDuty = 5500;
    } else if (itemPrice <= 1000000) {
        stampDuty = 8500;
    } else {
        stampDuty = 15000;
    }

    // Calculate Net salary
    let netSalary = itemPrice - incomeTax - socialSecurity - stampDuty;
    return netSalary;
}

// Call the function
let netSalary = calculateNetSalary(itemPrice);
if (netSalary !== null) {
    console.log(`Net Salary: ${netSalary}`);
}