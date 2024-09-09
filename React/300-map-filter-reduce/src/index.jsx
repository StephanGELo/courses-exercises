// Use anonymous functions and arrow functions to implement built-in functions:
var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function(num){
//     return num * 2;
// });


const newNumbers = numbers.map(num => num * 2);

console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.
//     const filteredNumbers = numbers.filter(function(num){
//         return num > 2;
//     });
const filteredNumbers = numbers.filter(number => number > 5);

console.log("Filtered nums are : ", filteredNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const sum = numbers.reduce(function(accumulator, currentNum) {
//     return accumulator + currentNum;
// });
/*** If there are two arguments for the function, then they nneed to be enclosed in a bracket. 
 * If there are more than 1 line of statements, then the curly braces need to be used. 
 * otherwise, both brackets and curly braces can be taken out in arrow function. */
const sum = numbers.reduce( (accumulator, num) => accumulator + num);

console.log("sum is :" , sum);

// //Find - find the first item that matches from an array.
// const num = numbers.find(function(number){
//     return number > 3;
// });
const num = numbers.find( num => num > 3);
console.log("firstnum is: ", num);
// //FindIndex - find the index of the first item that matches.
// const index = numbers.findIndex(function(number){
//     return number > 3;
// });
const index = numbers.findIndex(num => num > 3);
console.log("Index is :", index);

import emojipedia from "./emojipedia";

// const truncatedMeaning = emojipedia.map(function(emoji){
//     return emoji.meaning.substring(0,100);
// });
const truncatedMeaning = emojipedia.map(emoji => emoji.meaning.substring(0,100));
console.log(truncatedMeaning);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser