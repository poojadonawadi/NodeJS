function delayedGreeting(name, callback) {
    setTimeout(() => {
        console.log("GoogMorning" + name);
        callback();
    }, 2000);
}

function afterGreeting() {
    console.log("This runs after greeting.");
}

delayedGreeting("Chetan", afterGreeting);
