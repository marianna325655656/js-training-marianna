// ✅ Task 2: Calculate Total Sales
// Description:
// Write a function calculateTotalSales that takes a nested object representing products sold during the day.
// Each product key contains an object with price and quantitySold.
// The function should return the total revenue.
// Requirements:
// - Use a for...in loop to iterate over the object.
// - Multiply price * quantitySold for each product and sum the results.

let totalRevenue = 0;
function calculateTotalSales(salesData) {
    
    for (let key in salesData){
        let price = salesData[key].price;
        let quantitysold = salesData[key].quantitysold;
        totalRevenue += price*quantitysold;
    };
    return totalRevenue;
  }
  let salesData = {
   product1: {
    price:1000, quantitysold:3
   },
   product2: {
    price:2000, quantitysold:2
   },
   product3: {
    price:3000, quantitysold:4
   }
   
  }
   console.log(calculateTotalSales(salesData)); 