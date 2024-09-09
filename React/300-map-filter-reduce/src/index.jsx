// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function(num){
//     return num * 2;
// });

// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.
//     const filteredNumbers = numbers.filter(function(num){
//         return num > 2;
//     });

// console.log("Filtered nums are : ", filteredNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const sum = numbers.reduce(function(accumulator, currentNum) {
//     return accumulator + currentNum;
// });
// console.log("sum is :" , sum);

// //Find - find the first item that matches from an array.
// const num = numbers.find(function(number){
//     return number > 3;
// });
// console.log("firstnum is: ", num);
// //FindIndex - find the index of the first item that matches.
// const index = numbers.findIndex(function(number){
//     return number > 3;
// });

// console.log("Index is :", index);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia";

const truncatedMeaning = emojipedia.map(function(emoji){
    return emoji.meaning.substring(0,100);
});

console.log(truncatedMeaning);
