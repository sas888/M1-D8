/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let exOne = [1, 2, 3, 4, 5];
console.log(exOne);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let exTwo = {
  name: "John",
  surname: "Doe",
  age: 30,
  email: "john@domain.com",
};

console.log(exTwo);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

exTwo.hasDrivingLicense = true;

console.log(exTwo);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

// delete exTwo.age;
delete exTwo["age"];
console.log(exTwo);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let exFive = {
  name: "Simon",
  surname: "Lee",
  age: 40,
  email: "simon@domain.com",
};

console.log(exFive);

if (exTwo["email"] === exFive.email) {
  console.log(`The emails are matching!`);
} else {
  console.log("Email does not match!");
}
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
let shoppingCart = [
  { id: "131131", product: "Item 1", price: 40 },
  { id: "101232", product: "Item 2", price: 4.5 },
  { id: "302442", product: "Item 3", price: 39.99 },
  { id: "103452", product: "Item 4", price: 0.99 },
];

let totalShoppingCart = 0;

for (let i = 0; i < shoppingCart.length; i++) {
  let totalAmount = shoppingCart[i];
  totalShoppingCart += totalAmount.price;
}

let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log(
    `Your total is £${totalShoppingCart}. Congratulations! Your order includes FREE Shipping!"`
  );
} else {
  console.log(
    `Your total is £${totalShoppingCart}. You order does not qualify for free shipping. Your total including shipping is ${
      totalShoppingCart + shippingCost
    }`
  );
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFridayDiscount = totalShoppingCart * 0.2;
totalShoppingCart = totalShoppingCart - blackFridayDiscount;

console.log(
  "Today is Black Friday and everything has a 20% discount!!! your new total with discount is",
  "£" + totalShoppingCart.toFixed(2)
);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
