// Create a Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 35);

alice.greet();
bob.greet();