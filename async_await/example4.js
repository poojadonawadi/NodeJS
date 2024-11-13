function delayedLog() {
    return new Promise(resolve => {
        setTimeout(() => resolve("This is delayed"), 1000); 
    });
}

async function showDelayedMessage() {
    const message = await delayedLog();
    console.log(message);
}

showDelayedMessage();
