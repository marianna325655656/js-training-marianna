//Create an object-based `Person` using a constructor function.

/*Requirements:
1. Create a constructor function `Person` that takes `name` and `age` as parameters.
2. Inside the constructor, assign `name` and `age` to `this.name` and `this.age`.
3. Add a method `greet()` to the `Person` object that returns a message: `"Hello, my name is [name] and I am [age] years old."`
4. Create a new `Person` object and call the `greet()` method.
5. Bonus: If the person is under 18, modify the greeting to include `"I am a minor."`
*/
// Your code here

// Constructor function
function Person(name, age) {
    this.name = name; // Assign name to this.name
    this.age = age;   // Assign age to this.age
    
    // Method to greet
    this.greet = function() {
        if (this.age < 18) {
            return "I am a minor.";
        } else {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };
}

// Create a new Person object
let person = new Person("Marianna", 17);

// Call the greet method
console.log(person.greet());
