/*
  Day 03 – Loop Problems in JavaScript
  Topics covered:
  1. Print numbers using for loop
  2. Sum of first N natural numbers
  3. Even numbers from 1 to N
  4. Multiplication table
  5. Reverse a number
  6. Factorial of a number
  
*/

// //For loop
// //  1. Print numbers using for loop
// for (let index = 1; index <= 10; index++) {
//     console.log(index);
// }

// //2. Sum of first N natural numbers
// let input = prompt("Enter the number till where you want to print");

// if (input === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(input);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//         sum = 0;
//         for (let i = 1; i <= m; i++) {
//             sum += i;
//         }
//         console.log(sum);
//     }
// }


// //3. Even numbers from 1 to N
// for( let num = 1; num <=10; num++){
//     if( num%2 == 0){
//         console.log(num);
//     }
// }


// // 4. Multiplication table
// let num = Number(prompt("Enter the number:"));;
// for( let i = 1; i <=10; i++){
//     console.log(`${num}x${i}=${num*i}`);
    
// }

// // 5. Reverse a number
// let desiredNum = Number(prompt("Enter a number:"))
// for( let i = desiredNum; i>(desiredNum - 100); i--){
//     console.log(i);
// }

// // 6. Factorial of a number

// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//         fact = 1;
//         for (let i = 1; i <= m; i++) {
//             fact = fact* i;
//         }
//         console.log(fact);
//     }
// }

// 7. Factors of a number 

// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//         for (let i = 1; Math.floor(i <= m/2); i++) {
//             if( m%i === 0){
//                 console.log(i);
//             }
//         }
//         console.log(m);
//     }
// }

// 8. Prime Number

//Method 1

// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//         var a=true;
//         for (let i = 2; Math.floor(i <= m/2); i++) {
//             if( m%i === 0){
//                 var a = false;
//                 break
//             }
//         }
//     }
// }

//Method 2

// function isPrime(m){
//     if(m<=1)return false;
//     if(m===2)return true;
//     if(m%2===0)return false;
//     for ( i = 3; i <= Math.floor(Math.sqrt(m)); i+=2){
//         if(m%i===0)return false
//     }
//     return true
// }

// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);
    
//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//         console.log(isPrime(m))
//     }
// }

//While loop
// Sum of Entered Digits 
// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//        var sum = 0;
//        while(m>0){
//         var rem = m%10;
//         sum += rem;
//         m = Math.floor(m/10);
//        }
//         console.log(sum);
        
//     }
// }

// Reversing a number
// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//     var rev = 0;
//     while(m>0){
//         var rem = m%10;
//         rev = rev*10 + rem;
//         m = Math.floor(m/10)
//     }
//         console.log(rev);
        
//     }
// }

//Strong Number
// let pr = prompt("Enter the number:");

// if (pr === null) {
//     console.log("User has cancelled");
// } else {
//     let m = Number(pr);

//     if (isNaN(m) || m <= 0) {
//         console.log("Enter a valid number");
//     } else {
//         var sum = 0;
//         var copy = m;
//         while(m>0){
//             var rem = m%10;
//             var fact = 1;
//             for( var i =1; i <= rem; i++){
//                 fact = fact*i;
//             }
//             sum = sum + fact;
//             m = Math.floor(m/10);
//         }
//         if(copy === sum){
//             console.log("Strong");
//         }
//         else{
//             console.log("Not Strong");
            
//         }
//     }
// }

//Do-While
//Repeated Hello
// let input;
// do{
//    input = Number(prompt("Enter Zero to exit"))
//    console.log("Hello");
   
// }while(input !== 0)
// console.log("Loop exited");

//Guessing a number
let random = Math.floor(Math.random()*100)+1;

let guess = -1;
while(guess !== random){
    guess = Number(prompt("Guess the number"))
    if(isNaN(guess) || guess< 1 || guess > 100){
        console.log("Invalid number!! try again b/w 1 - 100");
        // continue;
    }if(guess > random){
        console.log("Your guess was too high");
    }else if(guess < random){
        console.log("Your guess was too low");
    }else{
        console.log("You correctly guessed the number",guess);
        
    }
}