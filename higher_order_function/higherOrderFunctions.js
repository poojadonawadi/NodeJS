//example 1 : filter()
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

//example 2 : map()
const integers = [1, 2, 3, 4, 5];
const doubledNumbers = integers.map(num => num * 2);
console.log(doubledNumbers);

//example 3 :
setTimeout(() => {
    console.log('This message will be logged after 2 seconds');
  }, 2000);
  
  setInterval(() => {
    console.log('This message will be logged every 1 second');
  }, 1000);