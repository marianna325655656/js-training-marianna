// Task 3: Default Value with an Optional Parameter
// Requirement: Create a function that accepts a 'discount' parameter for an item price.
// If no 'discount' is provided, it should default to 0%. The function should calculate and return the final price after applying the discount.
// Write your code here

function price(originalPrice, discount = 0){
    const finalPrice =originalPrice - (originalPrice*(discount/100));
    return finalPrice;
}
const discountedPrice = price(89);
const discountedPrice1 = price(50, 20);
console.log(discountedPrice);
console.log(discountedPrice1);