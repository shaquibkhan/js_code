// Q.1 Find the second largest number from a given array
const arr = [33,45,67,1,9,98,678,677];

// Step:1 find the largest number
let highestNum = Math.max(...arr);
// console.log(highestNum); 

//  Step:2 Remove the highest number and then find the largest number from that array.

let newArr = arr.filter(number => number !== highestNum );

let secondHighest = Math.max(...newArr);
console.log(`Original array is ${arr}`);
console.log(`Second highest number ${secondHighest}`);

// Q. 2 Find the second smallest number from a given array ? 

// Step:1 find the smallest number
let smallest = Math.min(...arr);
// console.log(`Smallest number ${smallest}`);

// Step:2 remove that smallest number and then again find the smallest number from that given array.

let newArr2 = arr.filter(number => number !== smallest);
let secondSmallest = Math.min(...newArr2);
console.log(`Second smallest number is ${secondSmallest}`);


