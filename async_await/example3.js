async function getMessage() {
    return "Hello, world!";
}

async function showMessage() {
    const message = await getMessage();
    console.log(message); 
}

showMessage();
