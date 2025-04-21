// Task 5: Constructor Function for Calculator with Objects
/*
Create a `Calculator` constructor function to perform basic arithmetic operations on object properties.

Requirements:
1. Create a constructor function `Calculator` that accepts two parameters: `num1` and `num2`.
2. Inside the constructor, assign `num1` and `num2` to `this.num1` and `this.num2`.
3. Add methods `add()`, `subtract()`, `multiply()`, and `divide()` to perform the respective operations using `this.num1` and `this.num2`.
4. Create a new `Calculator` object and perform calculations by calling these methods.
5. Print the results of each operation.
*/
// Your code here

let Calculator = function(num1, num2){
    this.num1 = num1;
    this.num2 = num2;

    this.add = function(){
        return this.num1 + this.num2;
    },

    this.subtract = function(){
        return this.num1 - this.num2;
    }
    this.multiply = function() {
        return this.num1 * this.num2; 
    },

    this.divide = function(){
        if(this.num2 ===0){
            return "Can't divide by zero"
        }
        return this.num1 / this.num2;
}
}



let calculator = new Calculator(10, 2);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
