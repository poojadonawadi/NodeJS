//examples for spread operators
//example 1 : array example
const integers = [12, 13];
const primeNumbers = [3, 7];
const wholeNumbers = [...integers, ...primeNumbers];

console.log(wholeNumbers);

//example 2 : 
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(copiedNumbers);

//spread operators for objects
//example 1:
const obj1 = {name: "Tom", age: 22}
let copyObj = {...obj1};
console.log(copyObj);

//example 2 : Merge two objects
const object1 = {name : "Tom", branch : "CSE"}
const object2 = {age : 22, sub : "JavaScript"}
let details = {...object1, ...object2};
console.log(details);

