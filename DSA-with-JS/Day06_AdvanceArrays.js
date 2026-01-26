/* Day 06 Advance Arrays
    topics covered:
    1 Left rotation by 1 element
    2 Right rotation by 1 element
    3 Left rotation by k element
    4 Right rotation by k element
    5 Remove Duplicates from Sorted Array
    6 Merge two sorted arrays 
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


// Remove Duplicates from Sorted Array

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
// console.log(nums);


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
// console.log(merge);

// Merging two sorted arrays but storing the sorted array in first arr itself ( leetcode question number: 88);

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
m = 3;
n = 3;
let i = m - 1;
let j = n - 1;
let k = m + n -1;
while( i >= 0 && j >= 0){
    if( nums1[i] > nums2[j]){
        nums1[k] = nums1[i]
        i--;
    }else{
        nums1[k] = nums2[j];
        j--;
    }
    k--;
};
while (j >= 0) {
nums1[k] = nums2[j];
j--;
k--;
}
console.log(nums1);
