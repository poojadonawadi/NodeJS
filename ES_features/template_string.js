// array example for template string

const fruits = ['apple', 'banana', 'orange'];

// Joining array elements
console.log(`Available fruits: ${fruits.join(', ')}`);

//example 2
const prices = [10, 20, 30];
console.log(`Prices with tax: ${prices.map(price => price * 1.2)}`);

//example for objects
const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(`User ${user.name} is ${user.age} years old and lives in ${user.city}`);

//example 2:
const company = {
    name: 'Tech Corp',
    employees: {
        count: 100,
        departments: ['IT', 'HR', 'Finance']
    },
    location: 'Silicon Valley'
};

console.log(`
    Company: ${company.name}
    Location: ${company.location}
    Employees: ${company.employees.count}
    Departments: ${company.employees.departments.join(', ')}
`);