function delayedGreeting(name, callback) {
    setTimeout(() => {
        console.log("Hello, " + name);
        callback();
    }, 2000);
}

function afterGreeting() {
    console.log("This runs after greeting.");
}

delayedGreeting("Bob", afterGreeting);
