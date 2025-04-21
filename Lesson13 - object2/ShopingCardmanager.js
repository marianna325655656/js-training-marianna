// Task 1: Object-Based Shopping Cart Manager
// You should create an object `ShoppingCartManager` to manage a shopping cart.

// Requirements:
// 1. Create an object called `shoppingCart` with an initial property `cart` (array) containing items like `["Milk", "Bread", "Eggs"]`.
// 2. Add a method `addItem(item)` that adds a new item to the `cart`.
// 3. Add a method `removeItem(item)` that removes the first occurrence of an item from the `cart`.
// 4. Add a method `clearCart()` that removes all items from the `cart`.
// 5. Add a method `getCart()` that returns the current items in the cart.
// 6. Add a method `getItemCount()` that returns the number of items in the cart.
// 7. After performing all the above operations, print the final cart and the item count.

let shoppingCart = {
     cart: ["Milk", "Bread", "Eggs"],

     addItem(item){
        this.cart.push(item);
    },
    removeItem(item){
       const index = this.cart.indexOf(item);
       if(index !==  -1) {
        this.cart.splice(index, 1)
       }
    },
    clearCart(){
        this.cart = [];
    },
    getCart() {
        return this.cart;
    },
    getItemCount(){
        return this.cart.length;
    }
}
shoppingCart.addItem("kanachi");
console.log(shoppingCart.addItem());
shoppingCart.removeItem("Milk");
console.log(shoppingCart.getItemCount());
shoppingCart.clearCart();
shoppingCart.getCart();
shoppingCart.getItemCount();
console.log(shoppingCart.getItemCount());

