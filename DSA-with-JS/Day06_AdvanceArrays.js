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

// let prices = [7,1,5,3,6,4];
// var MaxProfit=function(prices){
//     let MaxProfit=0;
//     let MinPrice = prices[0];
//     for(let i = 1; i < prices.length; i++){
//         if( prices[i] < MinPrice ){
//             MinPrice = prices[i];
//         }else{
//             let Profit = prices[i] - MinPrice;
//             MaxProfit = Math.max(MaxProfit,Profit)
//         }
//     }
//     return MaxProfit;
// }

// let profit = MaxProfit(prices)
// console.log(`Profit equal to: ${profit}`);


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
