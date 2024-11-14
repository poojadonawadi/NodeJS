function fetchData(callback) {
    setTimeout(() => {
      const user = { name: 'Pooja', age: 22 };
      callback(user);
    }, 1000);
  }
  
  fetchData(user => console.log(user));