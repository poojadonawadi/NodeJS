const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = promise1.then((message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message + ' and Promise 2 resolved');
      }, 1000);
    });
  });
  
  promise2.then((message) => {
    console.log(message); 
  });