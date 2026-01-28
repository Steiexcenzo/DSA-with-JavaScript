/* Day 06 Advance Arrays
    topics covered:
    1 Left rotation by 1 element
    2 Right rotation by 1 element
    3 Left rotation by k element
    4 Right rotation by k element
    5 Remove Duplicates from Sorted Array
    6 Merge two sorted arrays 
    7 Merging two sorted arrays but storing the sorted array in first arr itself
    8 Best Time to Buy and Sell Stock
    9 Sorting colors
    10 Maximum sub Array
    11 Majority element 
    12 Trapping rain water
    13 Single Number (leetcode question number:136)
    14 Pow(X,n) with out using built-in pow
    15 Two sum (leetcode question number:1)
    16 Plus one (leetcode question number:66)
*/

// 1 Left rotation by 1 element


let arr  = [1,2,3,4,5]

// let copy = arr[0];
// for( let i = 0;i < arr.length-1;i++ ){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1]=copy
// console.log(arr);


// 2 Right rotation by 1 element

// let Copy = arr[arr.length-1];
// for(let i = arr.length-1 ; i > 0; i--){
//     arr[i] = arr[i-1]
// }
// arr[0]=Copy;
// console.log(arr);


// 3 Left rotation by k element

// Method 1

// let k = Number(prompt("Enter K value :"));
// k = k%arr.length
// for( let j = 0; j < k; j++){
//     let copy = arr[0];
//     for ( let i = 0; i < arr.length-1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr);

// Method 2 (Efficient alogorithm)

// let k = Number(prompt("Enter K value:"))
// k = k % arr.length;
// let temp = new Array(arr.length);
// for ( let i = 0; i < arr.length; i++){
//     temp[i] = arr[ (i+k)%arr.length]
// }
// console.log(temp);

// Method 3 (Block swap alogorithm)

// let k = Number(prompt("How many times do you want to rotate to left?"));
// k = k % arr.length;

// reverse(0 , k-1)
// reverse(k , arr.length-1)
// reverse(0 , arr.length-1)

// function reverse(i,j){
//     while( i < j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//         i++;
//         j--;
//     }
// }
// console.log(arr);


// 4 Right rotation by k element

// Method 1

// let k = Number(prompt("Enter K value :"));
// k = k%arr.length
// for( j = 0; j < k; j++){
//     let copy = arr[arr.length-1]
//     for(let i = arr.length-1; i > 0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0]= copy
// }
// console.log(arr);


// Method 2 (Efficient)

// let k = Number(prompt("Enter K value:"))
// k = k % arr.length;
// let temp = new Array(arr.length);
// for ( let i = arr.length-1; i >= 0; i--){
//      temp[ (i+k)%arr.length] = arr[i]
// }
// console.log(temp);


// Method 3 (Block swap method)

// let k = Number(prompt("How many times do you want to rotate to Right?"));
// k = k % arr.length;

// reverse(0,arr.length-1)
// reverse(0,k-1)
// reverse(k,arr.length-1)

// function reverse(i,j){
//     while(i < j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//     }
// }
// console.log(arr);


// 5 Remove Duplicates from Sorted Array (leetcode problem number: 26);

// let nums = [0,0,0,1,1,2,2,3,3]
// var RemoveDuplicates = function(nums){
//     let j = 1;
//     for( let i = 0; i < nums.length-1; i++){
//         if( nums[i] != nums[i+1] ){
//             nums[j] = nums[ i +1];
//             j++
//         }
//     }
//     return j;
// }
// let k = RemoveDuplicates(nums)
// console.log(k);
// console.log(`After removing duplicates sorted array is:{nums}`);


// 6 Merge two sorted arrays

// let arr1 = [2,5,6];
// let arr2 = [1,3,4,7];
// let merge = new Array(arr1.length + arr2.length);
// let i = j = k = 0;

// while(i < arr1.length && j < arr2.length){
//     if( arr1[i] < arr2[j] ){
//         merge[k] = arr1[i]
//         k++;
//         i++
//     }else{
//         merge[k] = arr2[j];
//         k++;
//         j++
//     }
// }
// while(j < arr2.length){
//     merge[k] = arr2[j]
//     k++;
//     j++
// }
// while(i < arr1.length){
//     merge[k] = arr1[i]
//     k++;
//     i++;
// }
// console.log(`Merged Array is:${merge}`);


// 7 Merging two sorted arrays but storing the sorted array in first arr itself (leetcode problem number: 88);

// let nums1 = [1,2,3,0,0,0];
// let nums2 = [2,5,6];
// m = 3;
// n = 3;
// let i = m - 1;
// let j = n - 1;
// let k = m + n -1;
// while( i >= 0 && j >= 0){
//     if( nums1[i] > nums2[j]){
//         nums1[k] = nums1[i]
//         i--;
//     }else{
//         nums1[k] = nums2[j];
//         j--;
//     }
//     k--;
// };
// while (j >= 0) {
// nums1[k] = nums2[j];
// j--;
// k--;
// }
// console.log(`Sorted Array is:${nums1}`);


// 8 Best Time to Buy and Sell Stock (leetcode problem number: 121)

let prices = [7,1,5,3,6,4];
var MaxProfit=function(prices){
    let MaxProfit=0;
    let MinPrice = prices[0];
    for(let i = 1; i < prices.length; i++){
        if( prices[i] < MinPrice ){
            MinPrice = prices[i];
        }else{
            let Profit = prices[i] - MinPrice;
            MaxProfit = Math.max(MaxProfit,Profit)
        }
    }
    return MaxProfit;
}

let profit = MaxProfit(prices)
console.log(`Profit equal to: ${profit}`);


// 9 Sorting colors (leetcode problem number:75 )

let colors = [2,0,1];
let i = j = 0;
let k = colors.length - 1;
while( i <= k){
    if( colors[i] == 0 ){
        let temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
        i++;
        j++;
    }else if( colors[i] == 2 ){
        let temp = colors[i];
        colors[i] = colors[k];
        colors[k] = temp;
        k--
    }
    else{
        i++
    }
}
console.log(`Sorted color are: ${colors}`);


// 10 Maximum sub Array (leetcode problem number:53)

let Array = [-2,1,-3,4,-1,2,1,-5,4];
var SubArray = function(Array){
    let sum = 0;
    let max = - Infinity;
    for( let i = 0 ; i < Array.length ; i++){
        sum += Array[i];
        max = Math.max(max,sum)
        if( sum < 0 ){
            sum = 0;
        }
    }
    return max
}
let arrays = SubArray(Array);
console.log(`Maximum subArray sum is :${arrays}`);


// 11 Majority element (leetcode problem number:169)

let arrs = [2,2,1,1,1,2,2];

var MajorityElement = function(arrs){
    let ans = arrs[0];
    count = 1;
    for(let i = 1; i < arrs.length; i++){
        if(count == 0){
            ans = arrs[i];
            count = 1;
        }else if( ans == arrs[i] ){
            count ++
        }else{
            count --
        }
    }
    return ans
}

let a = MajorityElement(arrs)
console.log(`Majority element in the array is: ${a}`);


// 12 Trapping rain water (leetcode question number: 42)

// let height = [4,2,0,3,2,5];
// let left = new Array(height.length);
// let right = new Array(height.length);
// let Maxleft =  height[0];
// let Maxright = height[height.length-1];
// left[0] = Maxleft; right[right.length-1]=Maxright;

// for(let i = 1 ; i < height.length; i++){
//     Maxleft = Math.max(height[i],Maxleft)
//     left[i] = Maxleft;
// }
// for(let i = height.length-2 ; i >= 0; i--){
//     Maxright = Math.max(height[i],Maxright)
//     right[i] = Maxright;
// }
// let ans = 0;
// for(let i = 0 ; i < height.length ; i++){
//     ans += Math.min(left[i],right[i])-height[i]
// }
// console.log(ans);

// 13 Single Number (leetcode question number:136)

let single = [ 4,1,2,1,2];
var SingleNum=function(single){
    let result = 0;
    for(let i = 0; i < single.length; i++ ){
        result = result^single[i]  // js converts numbers to binary codes and performs XOR operation
    }
    return result
}
let d = SingleNum(single);
console.log(`Non repeated single element in the array is:${d}`);


// 14 Pow(X,n) with out using built-in pow 

let x = 2 , n = 10;
if( n === 0){
    console.log(1);
    ;
}
if( n < 0){
    x = 1/x;
    n = -n
}

let result = 1;

while(n > 0){
    if(n%2 == 1){
        result *= x
    }
    x *= x
    n = Math.floor(n/2)
}

console.log(result);


// 15 Two sum (leetcode question number:1)

// let nums = [2,7,11,15]
// let ans = [];
// target = 9
// for(let i = 0 ; i < nums.length; i ++){
//         for(let j = i+1 ; j < nums.length ; j++){
//             if( nums[i]+nums[j]===target ){
//                 ans = [i,j]
//             }
//         }
//     }
// console.log(ans);


// 16 Plus one (leetcode question number:66)

let digits = [4,3,2,1]

var Singlesum = function(digits){
    for(let i = digits.length-1;i >= 0; i--){
        if(digits[i]<9){
        digits[i]++;
        return digits
        }
        digits[i] = 0
    }
    digits.unshift(1);
    return digits;
}
let z = Singlesum(digits);
console.log(z);


// 17 Find First and Last Position of Element in Sorted Array (leetcode question number:34)

let Numbers = [5,7,7,8,8,10];
let target = 8;

for(let i = 0; i < Numbers.length; i++){
    for(let j = i + 1; j < Numbers.length; j++){
        if(Numbers[i]+Numbers[j]===target){
            console.log(Numbers[i],Numbers[j]);
        }else{
            console.log([-1,-1]);
        }
    }
}
