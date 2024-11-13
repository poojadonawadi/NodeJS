function delayedMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("This is a delayed message.");
        }, 2000); 
    });
}

async function displayMessage() {
    const message = await delayedMessage();
    console.log(message); 
}

displayMessage();
