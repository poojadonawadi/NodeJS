//includes() 
//example 1 : for arrays
const fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits.includes("banana")); 
console.log(fruits.includes("grape"));
console.log(fruits.includes("banana", 2)); 

//example 2 : for string
const text = "Hello, welcome to the JavaScript world!";

console.log(text.includes("JavaScript")); 
console.log(text.includes("Python" , 13)); 