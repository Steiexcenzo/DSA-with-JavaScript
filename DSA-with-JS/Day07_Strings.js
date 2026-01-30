/*
    Day 06 – String Related Problems in JavaScript
    Focus: traversal, comparison, manipulation
    1 Print each character of a string
    2 Reverse a string
    3 Check if string is palindrome
    4 Count vowels in a string
    5 Toggle each character in a string
    6 Frquency of a character in a string
    7 Checking wheather a string is palindrome or not if string contains alphanumeric characters
    8 Reverisng the words in the sentence
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


// 7 Checking wheather a string is palindrome or not if string contains alphanumeric characters

let s = '1oooo1'
s = s.toLowerCase();
let temp = '';
let Rev = '';
let isPalindrome = true;

for(let i = 0; i < s.length; i++){
    let ch = s.charCodeAt(i)

    if(
        (ch >= 48 && ch <= 57) ||
        (ch >= 97 && ch <=122)
    ){
        temp = temp + s[i]
    }
}
for(let i = temp.length-1; i >= 0; i--){
    Rev = Rev+temp.charAt(i)
}

if(Rev != temp){
    isPalindrome = false;
}

console.log(Rev);
console.log(isPalindrome);

console.log(temp);


// 8 Reverisng the words in the sentence

let string = "The sky is blue"
string = string.toLowerCase();
let words = [];
let word = "";
for(let i = 0; i < string.length; i ++){
    if(string[i]!= 0){
        word = word + string[i]
    }else{
        if(word.length>0){
            words.push(word);
            word = ""
        }
    }
}
if(word.length > 0){
    words.push(word)
}
console.log(words);

let result = "";
for(let i = words.length-1; i >= 0; i --){
    result = result + words[i]
    if(i!=0){
        result = result+" "
    }
}
console.log(result);


// 9 Checking Valid Anagram

let str1 = "rat";
let str2 = "car"

let StrCopy1 = {};
for(let ch of str1){
    StrCopy1[ch] = (StrCopy1[ch]||0)+1;
}
let chars = str1.split("");
chars.sort((a,b)=>StrCopy1[b]-StrCopy1[a]);
let copy1 = chars.join('')
console.log(copy1);

// console.log(chars.join(''));

let StrCopy2 = {};
for(let ch of str2){
    StrCopy2[ch] = (StrCopy2[ch]||0)+1;
}
let  char = str2.split("");
char.sort((a,b)=>StrCopy2[b]-StrCopy2[a]);
let copy2 = char.join('')
console.log(copy2);
// console.log(char.join(''));

const isAnagram = (copy1 === copy2)
console.log(isAnagram);