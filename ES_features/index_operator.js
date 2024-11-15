//example for index operator
const person = { name: "Alice", age: 25 };

// Accessing properties
console.log(person["name"]); 
console.log(person["age"]);

// Modifying a property
person["age"] = 26;
console.log(person.age); 

// Adding a new property
person["city"] = "New York";
console.log(person);

//example of index operator for arrays
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); 
console.log(fruits[1]);

// Modifying an element
fruits[1] = "orange";
console.log(fruits); 
