function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayHello() {
    console.log("Hello!");
}

greet("Pooja", sayHello);