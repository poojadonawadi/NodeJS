// structure assignent for arrays:
//example 1:
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third); 

//example 2 : skipping array elements
const colors = ['red', 'blue', 'green', 'yellow'];
const [,, thirdColor] = colors;
console.log(thirdColor);

//example 3:
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
const [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log(firstFruit);        
console.log(secondFruit);       
console.log(remainingFruits);

// structure assignments for objects

//example 1: assigning to different variables
const user = {
    userName: 'john_doe',
    userAge: 25
};

const { userName: uName, userAge: uAge } = user;
console.log(uName); // john_doe
console.log(uAge); 
