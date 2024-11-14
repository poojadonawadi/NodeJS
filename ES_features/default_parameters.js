
//example for default parametrs of ES6
function  student(name = "Tom"){
    return `Hello, ${name}`;
}
console.log(student("Jerry"));

//2.for objects 
function details(student = {name : "Smith", age : 18}) {
    console.log(`name : ${student.name}, age : ${student.age}`) 
}
details({name : "Pooja", age :22});
details();

//3. arrays example

function addColor(colors = ["orange", "purple"]) {
    colors.push("black");
    return colors;
}

console.log(addColor(["blue"])); 
console.log(addColor());

