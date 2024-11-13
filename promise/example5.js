const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 1 rejected');
    }, 1000);
  });
  
  promise1.then((message) => {
    console.log(message);
  }).catch((error) => {
    console.error(error); // Output: Promise 1 rejected
  });