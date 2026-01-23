/*
  Day 01 – JavaScript Basics for DSA
  Topics covered:
  1. Addition of numbers
  2. Relation between number and string
  3. Sum with a message
  4. Accept values and print result (simulation)
  5. Swap two variables (3 methods)
  6. Operators overview
  7. Type coercion
*/

// 1. Addition of numbers
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Sum of num1 and num2 is:", sum); // Output: 30

// 2. Relation between number and string
let strNum = "30";
let combined = num1 + strNum;
console.log("Combining number and string:", combined); // Output: "1030"

// 3. Sum with a message
console.log("The sum of", num1, "and", num2, "is:", sum); // Output: The sum of 10 and 20 is: 30

// 4. Accept values and print result (simulation)
age = prompt("Enter your age:"); // Uncomment this line to use in a browser environment
console.log("Your age is:", age); // Output will depend on user input

// 5. Swap two variables (3 methods)
// Method 1: Using a variable
let a = 5;
let b = 10;
let c ;

c = a;
a = b;
b = c;
console.log("After swapping (Method 1): a =", a, ", b =", b); // Output: a = 10 , b = 5

// Method 2: Using arithmetic operations
a = 5;
b = 10;
a = a + b; // a now becomes 15
b = a - b; // b becomes 5       
a = a - b; // a becomes 10
console.log("After swapping (Method 2): a =", a, ", b =", b); // Output: a = 10 , b = 5

// Method 3: Using destructuring assignment
a = 5;
b = 10;
[a, b] = [b, a];
console.log("After swapping (Method 3): a =", a, ", b =", b); // Output: a = 10 , b = 5

// 6. Operators overview
//Arithmetic Operators
let x = 15;
let y = 4;
console.log("Addition:", x + y); // Output: 19
console.log("Subtraction:", x - y); // Output: 11
console.log("Multiplication:", x * y); // Output: 60
console.log("Division:", x / y); // Output: 3.75
console.log("Modulus:", x % y); // Output: 3
console.log("Exponentiation:", x ** y); // Output: 50625   

//Relational Operators
console.log("x > y:", x > y); // Output: true
console.log("x < y:", x < y); // Output: false
console.log("x >= y:", x >= y); // Output: true
console.log("x <= y:", x <= y); // Output: false
console.log("x == y:", x == y); // Output: false
console.log("x != y:", x != y); // Output: true 

//Logical Operators
let p = true;
let q = false;
console.log("p && q:", p && q); // Output: false    
console.log("p || q:", p || q); // Output: true    
console.log("!p:", !p); // Output: false
console.log("!q:", !q); // Output: true

//Assignment Operators
let z = 10;
z += 5; // z = z + 5
console.log("z after += 5:", z); // Output: 15
z -= 3; // z = z - 3
console.log("z after -= 3:", z); // Output: 12
z *= 2; // z = z * 2
console.log("z after *= 2:", z); // Output: 24
z /= 4; // z = z / 4    
console.log("z after /= 4:", z); // Output: 6
z %= 4; // z = z % 4
console.log("z after %= 4:", z); // Output: 2
z **= 3; // z = z ** 3
console.log("z after **= 3:", z); // Output: 8

//Unary Operators
let num = 5;
console.log("Unary plus:", +num); // Output: 5
console.log("Unary minus:", -num);// Output: -5
console.log("Increment:", ++num);// Output: 6
console.log("Decrement:", --num);// Output: 5

// 7. Type coercion
let str = "100";
let number = 50;
console.log("Type coercion result:", str + number); // Output: "10050" 
console.log("Type coercion with subtraction:", str - number); // Output: 50
console.log("Type coercion with multiplication:", str * 2); // Output: 200
console.log("Type coercion with division:", str / 2); // Output: 50
console.log("Type of str:", typeof str); // Output: string
console.log("Type of number:", typeof number); // Output: number