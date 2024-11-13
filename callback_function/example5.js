function delayAndExecute(callback, delay) {
    setTimeout(callback, delay);
  }
  
  function greetAfterDelay() {
    console.log("Hello after 2 seconds!");
  }
  
  delayAndExecute(greetAfterDelay, 2000);