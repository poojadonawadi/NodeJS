const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected!");
    }, 2000);
  });
  
  promise.then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); 
  });