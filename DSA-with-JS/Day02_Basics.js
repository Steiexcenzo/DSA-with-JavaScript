
/*
  Day 02 – Math Functions in JavaScript
  Topics covered:
  - Math.round()
  - Math.floor()
  - Math.ceil()
  - Math.trunc()
  - Math.max() & Math.min()
  - Math.sqrt()
  - Math.pow()
  - Math.random()
  - Math.abs()
  - Conditional Statements and Practical Examples
  - Ternary Operator
  - Nested Ternary Operator
  - Swtich case
*/

console.log(Math.round(4.6)); // Output: 5 (if greater than 0.5 rounds to nearest greater integer or else lower integer)
console.log(Math.floor(4.9)); // Output: 4 (always rounds down)
console.log(Math.ceil(4.1)); // Output: 5 (always rounds up)
console.log(Math.trunc(4.9)); // Output: 4 (removes decimal part)
console.log(Math.max(10, 20, 5, 30)); // Output: 30 (returns the largest number)
console.log(Math.min(10, 20, 5, 30)); // Output: 5 (returns the smallest number)
console.log(Math.sqrt(49)); // Output: 7 (squares root of a number)
console.log(Math.pow(2, 3)); // Output: 8   (power function, 2^3 = 8)
console.log(Math.abs(-15)); // Output: 15   (returns absolute value)

// Generating a random number between 0 and 1
console.log(Math.random()); // Output: A random decimal number between 0 and 1
console.log(Math.trunc(Math.random()*900000)+100000); // Output: A random 6-digit OTP number

// Example: Calculate area and perimeter of a rectangle

let length = Number(prompt("Enter length of rectangle:"));
let breadth = Number(prompt("Enter breadth of rectangle:"));
let area = length * breadth;
console.log("Area of rectangle:", area); // Output: 24
let perimeter = 2 * (length + breadth);
console.log("Perimeter of rectangle:", perimeter); // Output: 20

// Example: Calculate the hypotenuse of a right triangle using Pythagorean theorem
let sideA = Number(prompt("Enter length of side A:"));
let sideB = Number(prompt("Enter length of side B:"));
let hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
console.log("Length of hypotenuse:", hypotenuse); // Output will depend on user input

//Circumference and Area of Circle
let radius = Number(prompt("Enter radius of circle:"));
let circumference = 2 * Math.PI * radius;
console.log("Circumference of circle:", circumference); // Output will depend on user input
let circleArea = Math.PI * Math.pow(radius, 2);
console.log("Area of circle:", circleArea); // Output will depend on user input

// Conditional Statements Example
let age = Number(prompt("Enter your age:"));
if(isNaN(age)) {
    console.log("Please enter a valid number for age.");
} else {
    if(age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

//Discount Calculation Example
//Method 1
let price = Number(prompt("Enter the Total Price:"));
if(isNaN(price) || price <= 0) {
    console.log("Please enter a valid number for price.");
}else if(price >0 && price <= 5000){
    console.log("Payable Amount is",price);
}else if(price > 5000 && price <=7000){
    console.log("Payable Amount is",price-Math.floor(5*price/100))
}else if(price > 7000 && price <=9000){
    console.log("Payable Amount is",price-Math.floor(5*price/100))
}else if(price > 9000){
    console.log("Payable Amount is",price-Math.floor(20*price/100))
}

//Method 2
let totalPrice = Number(prompt("Enter the Total Price:"));
let discount = 0;
if(isNaN(totalPrice) || totalPrice <= 0) {
    console.log("Please enter a valid number for price.");
}else if(totalPrice >0 && totalPrice <= 5000){
    discount = 0;
}else if(totalPrice > 5000 && totalPrice <=7000){
    discount = 5;
}else if(totalPrice > 7000 && totalPrice <=9000){
    discount = 10;
}else if(totalPrice > 9000){
    discount = 20;
}   
let payableAmount = totalPrice - Math.floor((discount * totalPrice) / 100);
console.log("Payable Amount is", payableAmount);

//Current bill calculation example
let input = prompt("Enter units consumed:");

if (input === null) {
  console.log("User cancelled the input.");
} else {
  let unitsConsumed = Number(input);

  if (isNaN(unitsConsumed)) {
    console.log("Invalid input! Please enter a number.");
  } else if (unitsConsumed < 0) {
    console.log("Units cannot be negative.");
  } else {
    let billAmount = 0;

    if (unitsConsumed >= 400) {
      billAmount += (unitsConsumed - 400) * 13;
      unitsConsumed = 400;
    }

    if (unitsConsumed > 200) {
      billAmount += (unitsConsumed - 200) * 8;
      unitsConsumed = 200;
    }

    if (unitsConsumed > 100) {
      billAmount += (unitsConsumed - 100) * 6;
      unitsConsumed = 100;
    }

    billAmount += unitsConsumed * 4;

    console.log("Total Bill Amount is:", billAmount);
  }
}


//INR denominations example
let inputAmount = prompt("Enter the amount in INR:");
if (inputAmount === null) {
  console.log("User cancelled the input.");
}
else {
  let amount = Number(inputAmount);   
    if (isNaN(amount) ){
        console.log("Invalid input! Please enter a number.");
    }else if(amount < 0){
        console.log("Amount cannot be negative.");
    }if(amount >=500){
        let notesOf500 = Math.floor(amount/500);
        amount = amount % 500;
        console.log("500 INR notes:",notesOf500);
    }
    if(amount >=200){
        let notesOf200 = Math.floor(amount/200);
        amount = amount % 200;
        console.log("200 INR notes:",notesOf200);
    }
    if(amount >=100){
        let notesOf100 = Math.floor(amount/100);
        amount = amount % 100;
        console.log("100 INR notes:",notesOf100);
    }
    if(amount >=50){
        let notesOf50 = Math.floor(amount/50);
        amount = amount % 50;
        console.log("50 INR notes:",notesOf50);
    }
    if(amount >=20){
        let notesOf20 = Math.floor(amount/20);
        amount = amount % 20;
        console.log("20 INR notes:",notesOf20);
    }
    if(amount >=10){
        let notesOf10 = Math.floor(amount/10);
        amount = amount % 10;
        console.log("10 INR notes:",notesOf10);
    }
    if(amount >=5){
        let notesOf5 = Math.floor(amount/5);
        amount = amount % 5;
        console.log("5 INR notes:",notesOf5);
    }
    if(amount >=2){
        let notesOf2 = Math.floor(amount/2);
        amount = amount % 2;
        console.log("2 INR notes:",notesOf2);
    }
    if(amount >=1){
        let notesOf1 = Math.floor(amount/1);
        amount = amount % 1;
        console.log("1 INR notes:",notesOf1);
    }
}

//Ternary Operator
console.log(122>12?"Greater than":"Less Than");


//Swtich case
let inputunits = prompt("Enter units consumed:");

if (inputunits === null) {
  console.log("User cancelled the input.");
} else {
  let units = Number(inputunits);

  if (isNaN(units) || units < 0) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    let billAmount = 0;

    switch (true) {
      case units > 400:
        billAmount += (units - 400) * 13;
        units = 400;

      case units > 200:
        billAmount += (units - 200) * 8;
        units = 200;

      case units > 100:
        billAmount += (units - 100) * 6;
        units = 100;

      default:
        billAmount += units * 4;
    }

    console.log("Total Bill Amount is:", billAmount);
  }
}

