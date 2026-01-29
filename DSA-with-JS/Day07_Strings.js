/*
    Day 06 – String Related Problems in JavaScript
    Focus: traversal, comparison, manipulation
    1 Print each character of a string
    2 Reverse a string
    3 Check if string is palindrome
    4 Count vowels in a string
    5 Toggle each character in a string
*/


// 1 Print each character of a string

let str = "Hello";
for(let i = 0; i < str.length; i++ ){
    console.log(str[i]);
}


// 2 Reverse a string line by line

for(let i = str.length-1; i >= 0; i--){
    console.log(str[i]);
}

// In the same line

let rev = "";
for(let i = str.length-1; i >= 0; i--){
    rev = rev + str[i]
}
console.log(rev);


// 3 Check if string is palindrome

str = str.toLowerCase()

let isPalindrom = true;
let i = 0,j = str.length - 1;
while(i < j){
    if(str[i]!=str[j]){
        isPalindrom = false;
        break;
    }
    i++;
    j--
}
if(isPalindrom)console.log(`${str} is a palindrom`);
else console.log(`${str} is not a palindrome`);


// 4 Count vowels in a string

let vowelCount = 0;
for(let i = 0 ; i < str.length; i++){
    let ch = str[i].toLowerCase()
    if(
        ch == "a" ||
        ch == "e" ||
        ch == "i" ||
        ch == "o" ||
        ch == "u"
    ){
        vowelCount++;
    }
}
console.log(vowelCount);


// 5 Toggle each character in a string

let toggle = "";
for(let i = 0; i < str.length;i++){
    let ch = str.charCodeAt(i)
    if(ch >= 65 && ch <=90 ){
        toggle = toggle + String.fromCharCode(ch+32)
    }else if(ch >= 97 && ch <= 122){
        toggle = toggle + String.fromCharCode(ch-32)
    }else{
        toggle = toggle + str[i]
    }
}
console.log(toggle);


// 6 Frquency of a character in a string

let freq = {}
for(let ch of str){
    freq[ch] = (freq[ch] || 0)+1;
}
console.log(freq);

let fre = new Map();
for(let ch of str){
    fre.set(ch,(fre.get(ch)||0)+1)
}
for(let [ch,Count]of fre){
    console.log(`${ch} appears ${Count} times`);
    
}


