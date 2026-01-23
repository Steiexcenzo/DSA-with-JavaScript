
//   Day 04 – Pattern Generation using Loops
//   Focus: nested loops & logic building


// Generation of square

let prompt = require('prompt-sync')();  
let n = Number(prompt("Enter a number :"));
for(let i=1; i<=n; i++ ){
    for(let j=1; j<=n; j++){
        process.stdout.write("* ") //Is a method used to print something on the terminal but does not go to the next line
    }
    console.log();  
}


// Generation of left-right angled triangle with "*"

let input = require('prompt-sync')();  
let o = Number(input("Enter a number :"));
for(let i=1; i<=o; i++ ){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ") //Is a method used to print something on the terminal but does not go to the next line
    }
    console.log();  
}


// Generation of left-right angled triangle with "ABC"

let inp = require('prompt-sync')();  
let b = Number(inp("Enter a number :"));
for(let i=1; i<=b; i++ ){
    var ascii = 65;
    for(let j=1; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ") 
        ascii++//Is a method used to print something on the terminal but does not go to the next line
    }
    console.log();  
}


// Generation of left-right angled triangle with "123"

let user = require('prompt-sync')();  
let c = Number(user("Enter a number :"));
for(let i=1; i<=c; i++ ){
    for(let j=1; j<=i; j++){
        process.stdout.write(j+" ") //Is a method used to print something on the terminal but does not go to the next line
    }
    console.log();  
}


// Generation of invereted right angled triangle with "*"

let taken = require('prompt-sync')();  
let d = Number(taken("Enter a number :"));
for(let i=1; i<=d; i++ ){
    for(let j=i; j<=d; j++){
        process.stdout.write("* ") //Is a method used to print something on the terminal but does not go to the next line
    }
    console.log();  
}

// Generation of mirror right angle tirangle with "*"

let User = require('prompt-sync')();  
let e = Number(User("Enter a number :"));
for(let i=1; i<=e; i++ ){
    for(let j=i; j<e; j++){
        process.stdout.write("  ") 
    }for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();  
}


// Generation of normal triangle with "*"

let Input = require('prompt-sync')();  
let f = Number(Input("Enter a number :"));
for(let i=1; i<=f; i++ ){
    for(let j=i; j<f; j++){
        process.stdout.write(" ") 
    }for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();  
}


// Generation of x

let UserInput = require('prompt-sync')();  
let g = Number(UserInput("Enter a number :"));
for(let i=1; i<=g; i++ ){
    for(let j=1; j<= g; j++){
        if( i == j || i+j == g+1){
            process.stdout.write("* ") 
        }
        else{
            process.stdout.write(" ") 
        }
    }
    console.log();  
}

// Generation of v

let Prompt = require('prompt-sync')();  
let h = Number(Prompt("Enter a number :"));

for( let i = 1; i <= h; i++){
    for(let j = 1; j <= 2*h; j++){
        if(i==j || i+j== 2*h){
            process.stdout.write("* ")
        }else process.stdout.write("  ")
    } 
    console.log();
}


